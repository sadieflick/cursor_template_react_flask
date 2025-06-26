# Application Architecture

This document defines the tech stack, project structure, and data models. The AI assistant **must** adhere to this structure.

## 1. Technology Stack

* **Frontend**: React (Vite), React Router, Axios, TailwindCSS
* **Backend**: Python, Flask, Flask-RESTful, Flask-SQLAlchemy, Flask-Migrate, Flask-JWT-Extended, Flask-CORS
* **Database**: SQLite

## 2. High-Level Diagram

`Client (React App) <--> API (Flask Server) <--> Database (SQLite)`

## 3. Directory Structure (Target)
```
├── backend/
│   ├── app/
│   │   ├── init.py         # App factory
│   │   ├── models.py           # SQLAlchemy models
│   │   ├── resources/          # API resources (controllers)
│   │   │   ├── auth.py
│   │   │   ├── post.py
│   │   │   └── ...
│   │   ├── schemas.py          # Marshmallow schemas for serialization
│   │   └── services/           # Business logic
│   ├── migrations/             # Flask-Migrate migration scripts
│   ├── tests/                  # Pytest tests
│   ├── .flaskenv
│   ├── config.py
│   └── run.py                  # Entry point
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/                # Axios instances and API call functions
│   │   ├── assets/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── common/
│   │   │   └── layout/
│   │   ├── context/            # React context (e.g., AuthContext)
│   │   ├── pages/              # Top-level page components
│   │   ├── utils/
│   │   └── App.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── .docs/
├── AI_INTERACTION_RULES.md
├── ARCHITECTURE.md
├── CODING_STANDARDS.md
├── PROJECT_SPECIFICATION.md
└── PROMPT_TEMPLATES.md
```


## 4. Database Models (`backend/app/models.py`)

* **User**
    * `id`: Integer, Primary Key
    * `username`: String, Unique, Not Null
    * `password_hash`: String, Not Null
* **Post**
    * `id`: Integer, Primary Key
    * `title`: String, Not Null
    * `content_html`: Text, Not Null
    * `created_at`: DateTime, Default `now()`
    * `user_id`: Integer, Foreign Key `user.id`
* **VisitorEmail**
    * `id`: Integer, Primary Key
    * `email`: String, Unique, Not Null
    * `captured_at`: DateTime, Default `now()`
* **Project**
    * `id`: Integer, Primary Key
    * `title`: String, Not Null
    * `description`: Text
    * `live_url`: String
    * `source_url`: String
    * `nested_app_path`: String (Path to the nested app's entry point)
* **Media**
    * `id`: Integer, Primary Key
    * `file_path`: String, Not Null
    * `media_type`: String ('image', 'video', 'pdf')
    * `page_association`: String ('about_me', 'bio_page_bg', etc.)

---