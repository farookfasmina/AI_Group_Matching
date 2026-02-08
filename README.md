# AI Study Group Platform

A full-stack web application designed to support collaborative learning through role-based access for **students** and **admins**.  
This project is developed as an academic and practical implementation of modern web technologies using **React**, **FastAPI**, and **PostgreSQL**.

---

## 📌 Project Overview

The **AI Study Group Platform** enables:
- Secure user authentication
- Role-based dashboards (Student / Admin)
- Modern, responsive user interfaces
- Scalable backend architecture using REST APIs

This project aligns with academic requirements and demonstrates real-world full-stack development practices.

---

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- JavaScript (ES6+)

### Backend
- **FastAPI**
- **SQLAlchemy**
- **PostgreSQL**
- **JWT Authentication**
- **Pydantic**

### Tools
- Git & GitHub
- pgAdmin
- Postman / Swagger UI
- Node.js & npm
- Python (venv)

---

## 📁 Project Structure

```text
AI_STUDY_GROUP/
│
├── frontend/
│   ├── src/
│   │   ├── pages/        # Login, Register, Dashboard
│   │   ├── components/   # ProtectedRoute, UI components
│   │   ├── utils/        # Auth helpers
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── auth.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── main.py
│   ├── venv/
│   └── requirements.txt
│
├── .gitignore
└── README.md

🔐 Features

User Registration & Login

JWT-based Authentication

Role-based access control

Protected routes

Responsive UI

PostgreSQL database integration

🚀 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/farookfasmina/AI_STUDY_GROUP.git
cd AI_STUDY_GROUP

2️⃣ Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt


Create a .env file inside backend/:

DATABASE_URL=postgresql+psycopg2://postgres:YOUR_PASSWORD@localhost:5432/ai_study_group
SECRET_KEY=your_secret_key


Run the server:

uvicorn app.main:app --reload


API Docs:

http://127.0.0.1:8000/docs

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

👥 User Roles
Role	Access
Student	Dashboard, learning features
Admin	Admin dashboard, management features
📚 Academic Relevance

This project demonstrates:

Full-stack system design

Secure authentication workflows

Database-driven applications

Clean UI/UX implementation

Industry-relevant architecture

Suitable for:

Final year project

Internship portfolio

Viva & technical interviews
