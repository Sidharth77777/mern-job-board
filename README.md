# MERN Job Board — Full-Stack Job Posting & Filtering Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-3C873A?style=flat&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=black)

A responsive job board platform built using **Next.js (TypeScript)** on the frontend and **Node.js + Express (TypeScript)** on the backend — featuring job listings, category filtering, and a full job submission workflow.

Easily browse jobs, filter by category, or post new openings — all in one clean and fast interface

[Live Link](https://mern-job-board-psi.vercel.app/)
<br/>
[Backend API](https://mern-job-board-server-7du2.onrender.com/)

---

## 🧠 Features

### 📄 Job Listings
- Fetches jobs from backend API  
- Each job card includes job title, company, category, and location  
- Clean and responsive design

### 🎯 Job Filtering
- Filter jobs by category (Design, Development, Marketing, etc.)
- Instant filter updates

### 📝 Post a Job
- Form includes:
  - Job Title  
  - Company  
  - Category  
  - Location  
  - Description  
- Sends POST request to backend
- Backend request validation handled using Zod 
- Auto-refresh job list on success

### 🎨 Modern UI / UX
- Built with:
  - **Next.js (TypeScript)**
  - **TailwindCSS**
  - **React Hooks**
- Optimized for all devices

### 🔧 Backend API
- **Node.js + Express (TS)**
- REST API Endpoints:
  - `GET /api/v1/jobs` — Fetch all jobs
  - `POST /api/v1/jobs` — Create a new job
- Optional MongoDB persistence
- CORS enabled

### 🐳 Docker Support
- Dockerized client + server
- Docker Compose stacks entire app
- MongoDB container included

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js (TypeScript), React Hooks, TailwindCSS |
| Backend | Node.js + Express (TypeScript), Zod (Schema Validation) |
| Database | MongoDB |
| API Client | Axios |
| Deployment | Vercel (Frontend), Render (Backend) |
| Containerization | Docker, Docker Compose |

---

## 🔁 Architecture Overview

Next.js Frontend → **Vercel**  
&darr; (REST API calls)  
Express Backend → **Render**  
&darr;  
MongoDB (Local or Atlas)

---

## 📸 Preview

*Home*
![Home](https://drive.usercontent.google.com/download?id=1cgshwlWbWpfZA2zi36jo_emnNJW4pDcD&export=view&authuser=0)

*View Jobs*
![View Jobs](https://drive.usercontent.google.com/download?id=1raFyxolyFrenRjURHwPS5lHUYNAo1qt9&export=view&authuser=0)

*Post Job*
![Post Job](https://drive.usercontent.google.com/download?id=1WtC850Ddw5yTP7vgNG4m4i9a8MUCf4Zq&export=view&authuser=0)

---

# ⚙️ Setup Guide

You can run the project in **two ways**:

---

# ✅ Method 1 — Local Setup (Node.js + npm)

## 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sidharth77777/mern-job-board
cd mern-job-board
```

## 2️⃣ Environment Variables
- .env.example is only a reference in both frontend and backend folders — app reads from .env
- 👉 Rename **.env.example** to **.env** in both frontend and backend, then fill in your environment variables
  
### Backend (backend/.env)
```bash
PORT=5000
FRONTEND_ORIGIN=http://localhost:3000
MONGODB_URI=<your_mongodb_uri>
```

### Frontend (frontend/.env)
```bash
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

## 3️⃣ Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd ../frontend
npm install
```


## 4️⃣ Start Development Servers

### Backend
```bash
cd ../backend
npm run dev
```

### Frontend
```bash
cd ../frontend
npm run dev
```

Your app runs at:

- Frontend → http://localhost:3000

- Backend → http://localhost:5000


#  🐳 Method 2 — Docker Setup

## 1️⃣ Clone the Repo
```bash
git clone https://github.com/Sidharth77777/mern-job-board
cd mern-job-board
```

## 2️⃣ Start Docker Compose
```bash
docker compose up --build
```

### Services:
| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost:3000](http://localhost:3000) |
| Backend  | [http://localhost:5000](http://localhost:5000) |
| MongoDB  | Local Docker container                         |

---

## 🔗 Deployment Instructions
| Component  | Platform                 |
| ---------- | ------------------------ |
| Frontend   | Vercel                   |
| Backend    | Render                   |
| Database   | MongoDB Atlas  |
| Containers | Docker                   |

---

## 🧾 API Reference
| Method | Route   | Description      |
| ------ | ------- | ---------------- |
| `GET`  | `/api/v1/jobs` | Fetch all jobs   |
| `POST` | `/api/v1/jobs` | Create a new job |

---

## 👨‍💻 Author
| Platform  | Link                                                                 |
| --------- | -------------------------------------------------------------------- |
| GitHub    | [https://github.com/Sidharth77777)](https://github.com/Sidharth77777)|
| LinkedIn  | [https://www.linkedin.com/in/sidharth-ks1/](https://www.linkedin.com/in/sidharth-ks1/)                                                           |
| X | [https://x.com/cryptoSid1564](https://x.com/cryptoSid1564)                                                  |

