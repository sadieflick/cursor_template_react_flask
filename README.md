# React + Flask Cursor Boilerplate

A modern full-stack boilerplate project combining React frontend with Flask backend, optimized for AI-assisted development using Cursor IDE with pre-configured rules and templates.

## 🚀 Features

* **Frontend**: React (Vite), React Router, Axios, TailwindCSS
* **Backend**: Python, Flask, Flask-RESTful, Flask-SQLAlchemy, Flask-Migrate, Flask-JWT-Extended, Flask-CORS
* **Database**: SQLite

## 📁 Project Structure

```
project-root
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
│   ├── .cursor/
│   │   └── rules/              # Cursor Assistant Rules
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
│   ├── .cursor/
│   │   └── rules/              # Cursor Assistant Rules
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

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.9+
- Cursor IDE (recommended)

### Installation

1. **Clone and setup**
   ```bash
   git clone <your-repo-url>
   cd your-project-name
   cp .env.example .env
   ```

2. **Frontend setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```

## 🤖 Cursor Rules Integration

This project includes a comprehensive set of Cursor Rules to enhance your AI-assisted development experience.

### Rule Organization

Rules are organized by placing them in .cursor/rules directories throughout your project structure:

- **`.cursorrules`** - Root-level rules applied project-wide
- **`.cursor/rules/`** - Directory for organized rule files
- **`frontend/.cursor/rules/`** - Frontend-specific rules
- **`backend/.cursor/rules/`** - Backend-specific rules

### Available Rule Files

1. **`global.md`** - Project-wide coding standards and architecture guidelines
2. **`react-frontend.md`** - React/TypeScript best practices and component patterns
3. **`flask-backend.md`** - Flask API development and Python conventions
4. **Templates** - Code snippets and boilerplate generators

### Using Cursor Rules Effectively

When creating a new Cursor Rules file, make sure you set the Rule Type options at the top of the file. The "Always" option will apply your rules regardless of the prompt.

**Best Practices:**

- Cover Multiple Aspects: Address coding style, documentation, error handling, and performance considerations
- Include Project-Specific Context: Mention important project details, such as the primary programming language, framework, or unique architectural decisions
- Use Examples: When possible, provide brief code snippets to illustrate your preferred practices
- For team projects, a shared .cursorrules file ensures that all team members receive consistent AI assistance, promoting cohesion in coding practices

### Creating New Rules

Use Cursor's built-in command: `Cmd + Shift + P > "New Cursor Rule"` to create rules quickly from inside Cursor.

## 📋 Development Guidelines

### Frontend (React + TypeScript)

- **Component Structure**: Use functional components with hooks
- **Type Safety**: Leverage TypeScript for better code quality
- **State Management**: Context API for simple state, consider Redux Toolkit for complex apps
- **Styling**: CSS Modules or styled-components (configured in rules)
- **Testing**: Jest + React Testing Library setup included

### Backend (Flask + Python)

- **API Design**: RESTful conventions with clear endpoint naming
- **Error Handling**: Consistent error responses and logging
- **Database**: SQLAlchemy ORM setup ready
- **Authentication**: JWT token-based auth template included
- **Testing**: pytest configuration included

### Code Quality

- **Linting**: ESLint for frontend, flake8 for backend
- **Formatting**: Prettier for frontend, black for backend  
- **Type Checking**: TypeScript strict mode, Python type hints
- **Git Hooks**: Pre-commit hooks for code quality (optional)

## 🔧 Cursor Rules Configuration

The included Cursor Rules help maintain consistency across:

- **Coding Style**: Formatting, naming conventions, file organization
- **Architecture**: Component patterns, API structure, data flow
- **Error Handling**: Consistent error management and logging
- **Documentation**: Code comments and README maintenance
- **Performance**: Optimization suggestions and best practices

With well-defined rules, the AI can generate code that requires less manual editing, speeding up your development process.

## 📚 Templates

The `templates/` directory contains:

- React component templates (functional, class, hook)
- Flask route and model templates
- API endpoint boilerplates
- Test file templates
- Configuration file templates

Reference these templates in your Cursor Rules using `@template-name.ext` syntax.

## 🚀 Deployment

### Frontend
- Build: `npm run build`
- Deploy to Vercel, Netlify, or static hosting

### Backend
- Production WSGI server (Gunicorn recommended)
- Deploy to Heroku, Railway, or cloud providers
- Environment variables properly configured

## 🤝 Contributing

1. Follow the established Cursor Rules for consistency
2. Update relevant rule files when adding new patterns
3. Test both frontend and backend changes
4. Update documentation as needed

## 📖 Additional Resources

- [Cursor Rules Documentation](https://docs.cursor.com/context/rules)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)
- [Flask Best Practices](https://flask.palletsprojects.com/en/2.3.x/patterns/)
- [Awesome Cursor Rules](https://github.com/PatrickJS/awesome-cursorrules)

## 📄 License

MIT License - see LICENSE file for details.

---

**Happy Coding with AI! 🤖✨**

> This boilerplate is designed to maximize your productivity with Cursor's AI assistance while maintaining code quality and consistency across your full-stack application.