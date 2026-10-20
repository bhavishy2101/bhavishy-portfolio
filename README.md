# BHAVISHY.exe — Full Stack MERN Portfolio Dashboard

A modern retro-brutalist personal portfolio dashboard built with the **MERN Stack** (MongoDB, Express.js, React 19, Node.js), inspired by cyberpunk grid terminals and high-contrast brutalist design.

![Design Preview](./Retro%20Grid%20Portfolio%20Dashboard.png)

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 8, React Router v7, Framer Motion, Lucide Icons, Pure CSS3 with CSS Custom Properties.
- **Backend**: Node.js, Express.js 4, Mongoose 8 (MongoDB ODM), CORS, Dotenv.
- **Database**: MongoDB (Atlas Cloud Cluster or local MongoDB Community Server).
- **Tooling & Linter**: Concurrently (multi-process dev runner), Nodemon (hot-reloading backend), Oxlint.

---

## 🌟 Key Features

1. **Retro Grid Dashboard Aesthetic**:
   - Custom dynamic grid background with brutalist high-contrast borders and sharp shadows (`box-shadow: 3px 3px 0px var(--border)`).
   - Curated typography: `Space Grotesk`, `Space Mono`, and `Bebas Neue`.
   - Dark / Light Mode Toggle persisted with CSS variables (`data-theme`).

2. **00. Hero / Landing Section**:
   - Live system status (`SYSTEM STATUS: ONLINE`).
   - Clean, bug-free typewriter role animation with graceful async transitions.
   - Dual Call-to-Action to View Projects and Download CV.
   - Interactive Tech Stack grid highlighting core engineering tools.

3. **01. About Me**:
   - Bio intro with terminal styling (`LET ME INTRODUCE MYSELF.`).
   - Structured Personal Info table with quick metadata.
   - Metric stat cards: **3+ Years of Learning**, **4+ Projects Built**, **50+ Problems Solved**.

4. **02. My Projects Showcase**:
   - Filterable projects showcase: `All`, `Web Apps`, `AI/ML`, `Salesforce`, `Tools`.
   - In-depth modal views with problem statements, datasets, metrics tables, and GitHub repository links.

5. **03. Experience Timeline**:
   - Vertical timeline with distinct year color badges (`2026`, `2025`, `2024`).
   - Detailed internship and project achievements.

6. **04. Skills Section**:
   - Categorized: **Frontend**, **Backend**, **Database & Cloud**, **Tools & Others**.
   - Tech logos with hover proficiency level tooltips and visual progress meters.

7. **Certifications & Achievements**:
   - Verified badges for Salesforce AI Associate, SIH, MERN Web Dev, and Problem Solving.

8. **05. Contact Form & Dual-Format CV Downloads**:
   - Full-stack contact form with strict validation on both frontend and backend.
   - Real MongoDB persistence via Mongoose `Contact.create()`.
   - Dual-format CV downloads (PDF and Word .docx) served directly from Express backend routes (`/api/download/cv/pdf`, `/api/download/cv/docx`).

---

## 📁 Project Structure

```
portfolio/
├── frontend/                   # React + Vite Frontend
│   ├── public/                 # Static assets & public CV files
│   │   ├── Bhavishy_Garg_Resume.pdf
│   │   ├── Bhavishy_Garg_Resume.docx
│   │   └── bhavishy.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Navigation bar with theme toggle & React Router links
│   │   │   ├── Hero.jsx        # Landing hero with typewriter animation
│   │   │   ├── About.jsx       # 01. About Me & Personal Info
│   │   │   ├── Projects.jsx    # 02. Filterable Projects Showcase
│   │   │   ├── Experience.jsx  # 03. Vertical Timeline
│   │   │   ├── Skills.jsx      # 04. Grouped Skills with Tooltips
│   │   │   ├── Certifications.jsx # Certifications & Awards
│   │   │   ├── Contact.jsx     # 05. Full-stack Contact Form & CV Downloads
│   │   │   └── Footer.jsx      # Retro Footer
│   │   ├── App.jsx             # Main Application assembly & React Router routes
│   │   ├── index.css           # Retro brutalist design system & CSS variables
│   │   └── main.jsx            # React root mount with BrowserRouter
│   ├── .env.example            # Frontend environment template
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # Node.js + Express.js API
│   ├── public/                 # Authentic resume files served by Express
│   │   ├── Bhavishy_Garg_Resume.pdf  # 133 KB authentic PDF resume
│   │   └── Bhavishy_Garg_Resume.docx # 14.8 KB authentic Word document
│   ├── .env.example            # Backend environment template (safe placeholders)
│   ├── package.json
│   └── server.js               # Express API routes, Mongoose models, & file streaming
│
├── .gitignore                  # Root Git ignore rules (excludes .env, node_modules, dist)
├── Bhavishy_Garg_Resume (1).docx # Original authentic Word resume
├── MERN_Portfolio_Assignment.pdf # Professor's assignment requirements
├── Retro Grid Portfolio Dashboard.png # Original Design Reference
└── README.md
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (`node -v`)
- **npm**: v9.0.0 or higher (`npm -v`)
- **MongoDB**: MongoDB Atlas account (free cloud cluster) or local MongoDB Community Server.

### 2. Environment Configuration

1. **Backend Environment**:
   Copy `.env.example` in `backend/` to `.env`:
   ```bash
   cp backend/.env.example backend/.env
   ```
   Configure your environment variables:
   ```ini
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority
   ADMIN_SECRET_KEY=bhavishy_dev_admin_key_2026
   ```

2. **Frontend Environment**:
   Copy `.env.example` in `frontend/` to `.env`:
   ```bash
   cp frontend/.env.example frontend/.env
   ```
   Ensure `VITE_API_URL` points to your backend:
   ```ini
   VITE_API_URL=http://localhost:5000
   ```

### 3. Quick Start (Concurrently)

From the root directory:
```bash
npm install
npm run dev
```
This single command runs:
- **Express Backend**: `http://localhost:5000` (with Nodemon hot-reload)
- **Vite React Frontend**: `http://localhost:5173` (with HMR)

Or run them in separate terminals:
- **Backend**: `cd backend && npm install && npm run dev`
- **Frontend**: `cd frontend && npm install && npm run dev`

---

## 🍃 MongoDB Atlas & Compass Setup Guide

Follow these beginner-friendly steps to connect your portfolio to MongoDB Atlas and view inquiries in MongoDB Compass.

### Step 1: Create a Free MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or sign up.
2. Click **Create** and select the **M0 Free Tier** cluster.
3. Choose a cloud provider and region closest to you (e.g. AWS / Mumbai `ap-south-1`).
4. Click **Create Deployment**.

### Step 2: Configure Database Security & User
1. Under **Security** > **Database Access**:
   - Click **Add New Database User**.
   - Choose **Password** authentication.
   - Enter a Username (e.g., `portfolio_admin`) and a strong Password.
   - Role: **Read and write to any database** (Atlas Admin or `readWriteAnyDatabase`).
   - Click **Add User**.
2. Under **Security** > **Network Access**:
   - Click **Add IP Address**.
   - Click **Allow Access from Anywhere** (`0.0.0.0/0`) for development.
   - Click **Confirm**.

### Step 3: Get the Connection URI
1. In the Atlas Dashboard, go to **Databases** and click **Connect** on your cluster.
2. Select **Drivers** (Node.js).
3. Copy the connection string:
   ```text
   mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
4. Insert your database name (e.g., `portfolio`) before the `?`:
   ```text
   mongodb+srv://portfolio_admin:<password>@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

> [!IMPORTANT]
> **Password Encoding Warning**:
> If your password contains special characters (such as `@`, `:`, `/`, `?`, `#`, `[`, `]`, `%`), you **must** URL-encode them.
> Examples:
> - `@` becomes `%40`
> - `#` becomes `%23`
> - `!` becomes `%21`
> - `&` becomes `%26`

### Step 4: Configure `backend/.env`
Paste your connection string into `backend/.env`:
```ini
MONGO_URI=mongodb+srv://portfolio_admin:YourEncodedPassword@cluster0.abcde.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 5: Start & Verify Connection
1. Save `backend/.env`. Nodemon will automatically restart.
2. You will see in the terminal:
   ```text
   ✅ Connected to MongoDB successfully.
   ```
3. Test the health endpoint in your browser or terminal:
   ```bash
   curl http://localhost:5000/api/health
   ```
   Response:
   ```json
   {
     "status": "OK",
     "database": "connected",
     "dbReadyState": 1,
     "message": "Portfolio backend and MongoDB are operational."
   }
   ```

### Step 6: Inspect Saved Documents in MongoDB Compass
1. Download and open [MongoDB Compass](https://www.mongodb.com/try/download/compass).
2. Paste your exact MongoDB Atlas connection string and click **Connect**.
3. In the left sidebar, click the `portfolio` database.
4. Click the `contacts` collection.
5. All inquiries submitted through your website's contact form will appear here with timestamps, name, email, subject, and message.

---

## 📡 API Endpoints

| Method | Endpoint | Description | Protection |
|---|---|---|---|
| `POST` | `/api/contact` | Submit contact inquiry to MongoDB | Public (Validated) |
| `GET` | `/api/download/cv/pdf` | Stream/download CV in PDF format | Public |
| `GET` | `/api/download/cv/docx` | Stream/download CV in Word format | Public |
| `GET` | `/api/contacts` | Retrieve stored contact inquiries | Admin (`x-admin-key: <ADMIN_SECRET_KEY>`) |
| `GET` | `/api/health` | Health check and database status | Public |

### `POST /api/contact` Validation Rules
- **Name**: String (2 to 100 characters).
- **Email**: Valid RFC email format.
- **Subject**: String (2 to 200 characters).
- **Message**: String (5 to 5000 characters).
- **Responses**:
  - `201 Created`: Successfully persisted in MongoDB (`{ success: true, message: "Thank you! Your message has been saved successfully.", contactId: "..." }`).
  - `400 Bad Request`: Validation failure (`{ success: false, message: "..." }`).
  - `503 Service Unavailable`: Database is offline/unconfigured (`{ success: false, message: "Database service is currently unavailable..." }`).

---

## 🔒 Security & GitHub Submission Readiness

1. **Environment Separation**:
   - `backend/.env` and `frontend/.env` are strictly excluded in `.gitignore`.
   - `.env.example` contains only placeholder values.
2. **Deterministic Installs**:
   - `package-lock.json` files are committed for reproducible npm installs.
3. **No Wildcard CORS with Credentials**:
   - CORS is strictly bound to `FRONTEND_URL` and development origins.
4. **Admin Protection**:
   - `GET /api/contacts` requires the `x-admin-key` header matching `ADMIN_SECRET_KEY`. No hardcoded fallback exists.
5. **No Exposing Secrets**:
   - No database URIs, passwords, or private keys are printed in server logs or response payloads.

---

## 🚢 Deployment Guide (Future Use)

- **Frontend (Vercel / Netlify)**:
  - Root directory: `frontend`
  - Build command: `npm run build`
  - Output directory: `dist`
  - Environment Variable: `VITE_API_URL=https://your-backend.onrender.com`
- **Backend (Render / Railway)**:
  - Root directory: `backend`
  - Build command: `npm install`
  - Start command: `node server.js`
  - Environment Variables:
    - `PORT=5000`
    - `MONGO_URI=mongodb+srv://...`
    - `ADMIN_SECRET_KEY=your_secure_admin_key`
    - `FRONTEND_URL=https://your-frontend.vercel.app`
