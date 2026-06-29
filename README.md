# 📝 Dev Diaries – MERN Blog Platform

**Dev Diaries** is a responsive full-stack blog application built with the MERN stack. It supports user registration, Google OAuth, post and comment management, dark/light mode, and an admin dashboard.

---

## 🚀 Features

- 🔐 JWT + Google OAuth Authentication  
- 📝 Create, Edit, Delete Blog Posts  
- 💬 Comments with Like, Edit, Delete  
- 🌓 Dark/Light Theme Toggle  
- 📷 Profile and Post Image Uploads  
- 🔧 Admin Panel with User & Comment Controls  

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Redux Toolkit, Redux Persist  
- **Backend**: Node.js, Express.js (`/api` folder), MongoDB  
- **Authentication**: JWT + Google OAuth  
- **Routing**: React Router DOM  

---

## 📁 Folder Structure

```
Dev-Diaries/
├── api/           # Backend (Node.js + Express)
├── client/        # Frontend (React.js)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/pratishtha-gupta/Dev-Diaries.git
   cd Dev-Diaries
   ```

2. **Set Environment Variables**

   Create a single `.env` file in the project root (see `.env.example`):
   ```
   # Backend
   MONGO=your_mongodb_uri
   JWT_SECRET=your_secret

   # Frontend (Firebase Web config, build-time)
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **Install Dependencies**
   ```bash
   cd api && npm install
   cd ../client && npm install
   ```

4. **Run the App**
   ```bash
   # Start backend
   cd api
   npm run dev

   # Start frontend
   cd ../client
   npm run dev
   ```

Frontend runs on: `http://localhost:5173`  
Backend runs on: `http://localhost:3000`

---

