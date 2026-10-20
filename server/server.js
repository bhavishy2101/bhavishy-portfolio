const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dns = require('dns');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Ensure reliable DNS resolution for MongoDB Atlas SRV records across Windows & ISP resolvers
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch {
  // Use system default if setServers is restricted
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Restrict CORS to configured frontend URL, Vercel deployments, and local development ports
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser agents, curl, Postman, or requests without origin header
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Allow live Vercel deployments and preview URLs
    if (/^https:\/\/.*\.vercel\.app$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: Access denied for origin ${origin}.`));
  },
  credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose Connection Management
const mongoUri = process.env.MONGO_URI ? process.env.MONGO_URI.trim() : '';

// Helper to determine active DB connection state
const isDatabaseReady = () => mongoose.connection.readyState === 1;

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    maxlength: [254, 'Email cannot exceed 254 characters']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    minlength: [2, 'Subject must be at least 2 characters'],
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [5, 'Message must be at least 5 characters'],
    maxlength: [5000, 'Message cannot exceed 5000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Connection Lifecycle Event Handlers
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connection established successfully.');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️  MongoDB disconnected.');
});

// Routes

// 1. Contact Form Submission (Real Database Persistence Only)
app.post('/api/contact', async (req, res) => {
  try {
    let { name, email, subject, message } = req.body || {};

    // Sanitize / Trim strings
    name = typeof name === 'string' ? name.trim() : '';
    email = typeof email === 'string' ? email.trim() : '';
    subject = typeof subject === 'string' ? subject.trim() : '';
    message = typeof message === 'string' ? message.trim() : '';

    // Validate presence
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, message) are required.'
      });
    }

    // Name validation
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Subject validation
    if (subject.length < 2 || subject.length > 200) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be between 2 and 200 characters.'
      });
    }

    // Message validation
    if (message.length < 5 || message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 5 and 5000 characters.'
      });
    }

    // Verify MongoDB connection before attempting to save
    if (!isDatabaseReady()) {
      return res.status(503).json({
        success: false,
        message: 'Database service is currently unavailable. Please verify backend MongoDB connection or contact bhavishy21cse@gmail.com directly.'
      });
    }

    // Await Mongoose creation and confirmation from MongoDB
    const savedContact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // Optional: send email notification via Nodemailer upon form submission (Assignment Rubric)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your_email@gmail.com') {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          subject: `Portfolio Contact: ${subject} (from ${name})`,
          text: `You received a new inquiry from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted At: ${savedContact.createdAt}`,
          html: `<h3>New Portfolio Inquiry</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p><p><small>Submitted at ${savedContact.createdAt}</small></p>`
        });
      } catch (mailErr) {
        console.warn('⚠️ Nodemailer notification skipped/failed:', mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been saved successfully.',
      contactId: savedContact._id
    });
  } catch (error) {
    console.error('Contact submission error:', error.message);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Server error processing your message. Please try again later.'
    });
  }
});

// 2. CV Download - PDF (Express backend route)
app.get('/api/download/cv/pdf', (req, res) => {
  let filePath = path.join(__dirname, 'public', 'Bhavishy_Garg_Resume.pdf');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', 'Bhavishy_CV.pdf');
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: 'CV PDF not found on server.' });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.download(filePath, 'Bhavishy_Garg_Resume.pdf', (err) => {
    if (err && !res.headersSent) {
      console.error('PDF download error:', err.message);
      res.status(500).json({ success: false, message: 'Failed to download CV PDF.' });
    }
  });
});

// 3. CV Download - DOCX (Express backend route)
app.get('/api/download/cv/docx', (req, res) => {
  let filePath = path.join(__dirname, 'public', 'Bhavishy_Garg_Resume.docx');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', 'Bhavishy_CV.docx');
  }

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'Word (.docx) resume is currently unavailable on server. Please provide a valid Bhavishy_Garg_Resume.docx file.'
    });
  }

  const stat = fs.statSync(filePath);
  // Ensure the document is a genuine Word file (not a corrupt dummy placeholder)
  if (stat.size < 500) {
    return res.status(404).json({
      success: false,
      message: 'Word (.docx) resume file on server is invalid or incomplete. Please upload the official Word document.'
    });
  }

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.download(filePath, 'Bhavishy_Garg_Resume.docx', (err) => {
    if (err && !res.headersSent) {
      console.error('DOCX download error:', err.message);
      res.status(500).json({ success: false, message: 'Failed to download CV DOCX.' });
    }
  });
});

// 4. Get all contacts (Protected Admin Route - requires x-admin-key header)
app.get('/api/contacts', async (req, res) => {
  try {
    const expectedKey = process.env.ADMIN_SECRET_KEY;
    if (!expectedKey) {
      return res.status(503).json({
        success: false,
        message: 'Admin access is disabled: ADMIN_SECRET_KEY is not configured in the environment.'
      });
    }

    const adminKey = req.headers['x-admin-key'] || req.query.key;
    if (!adminKey || adminKey !== expectedKey) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. Invalid or missing admin access key.'
      });
    }

    if (!isDatabaseReady()) {
      return res.status(503).json({
        success: false,
        message: 'Database is currently disconnected. Cannot retrieve stored contacts.'
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      count: contacts.length,
      contacts
    });
  } catch (error) {
    console.error('Admin contacts error:', error.message);
    return res.status(500).json({ success: false, message: 'Server error fetching contacts.' });
  }
});

// 5. Health Check Endpoint
app.get('/api/health', (req, res) => {
  const ready = isDatabaseReady();
  res.json({
    status: 'OK',
    database: ready ? 'connected' : 'disconnected',
    dbReadyState: mongoose.connection.readyState,
    message: ready
      ? 'Portfolio backend and MongoDB are operational.'
      : 'Portfolio backend is running; MongoDB is disconnected.'
  });
});

// Start HTTP Server
const server = app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
  if (!mongoUri) {
    console.warn('⚠️  MONGO_URI is not set in server/.env. MongoDB connection will remain idle until configured.');
  }
});

// Connect to MongoDB if MONGO_URI is configured
if (mongoUri) {
  mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000
  }).then(() => {
    console.log('✅ Connected to MongoDB successfully.');
  }).catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  });
}

// Graceful Shutdown
const shutdown = (signal) => {
  console.log(`\n🛑 Received ${signal}. Gracefully shutting down...`);
  server.close(async () => {
    try {
      if (mongoose.connection.readyState !== 0) {
        await mongoose.connection.close(false);
        console.log('🔒 MongoDB connection closed.');
      }
      process.exit(0);
    } catch (err) {
      console.error('Error during shutdown:', err.message);
      process.exit(1);
    }
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

module.exports = app;
