# Ansh Kapoor — Developer Portfolio

A premium full-stack developer portfolio built with React, Vite, Node.js, and Express.

## ✨ Features

- **Multi-page architecture** with React Router and smooth page transitions
- **Editorial design** with oversized typography and premium aesthetics
- **Dark/Light theme** with system preference detection and persistence
- **Framer Motion animations** for scroll reveals, page transitions, and micro-interactions
- **Full-stack backend** with Node.js, Express, and MongoDB-ready architecture
- **Responsive design** optimized for desktop, tablet, and mobile
- **13+ pages** including Home, About, Skills, Projects, Case Studies, and more

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite 5
- React Router DOM
- Framer Motion
- GSAP
- CSS Custom Properties

### Backend
- Node.js
- Express.js
- MongoDB / Mongoose
- Helmet, CORS, Rate Limiting

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route page components
│   │   ├── layouts/       # Layout wrappers
│   │   ├── animations/    # Animation variants
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   ├── data/          # Static data files
│   │   ├── styles/        # CSS design system
│   │   ├── App.jsx        # Root component
│   │   └── main.jsx       # Entry point
│   └── index.html
├── backend/
│   ├── server.js          # Express server
│   ├── routes/            # API routes
│   ├── controllers/       # Route handlers
│   ├── models/            # Mongoose models
│   ├── middleware/        # Custom middleware
│   └── config/            # Database config
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB (optional — app works without it)

### Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Development

```bash
# Start frontend (in frontend/)
npm run dev

# Start backend (in backend/)
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env` in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ansh-portfolio
NODE_ENV=development
```

## 👤 About

**Ansh Kapoor** — 2nd Year B.Tech Computer Science & Engineering Student at JMIT (Kurukshetra University)

---

Built with ❤️ using React & Node.js
