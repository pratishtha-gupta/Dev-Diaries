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

   - `api/.env`
     ```
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_secret
     GOOGLE_CLIENT_ID=your_client_id
     GOOGLE_CLIENT_SECRET=your_secret
     ```

   - `client/.env`
     ```
     VITE_BACKEND_URL=http://localhost:5000/api
     VITE_GOOGLE_CLIENT_ID=your_client_id
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
Backend runs on: `http://localhost:5000`

---

