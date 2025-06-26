# Prompt Templates for Incremental Development

Use these templates as a starting point for interacting with the AI assistant.

---

### Phase 1: Project Initialization

**Prompt 1.1 (Backend Boilerplate)**
> **Goal:** Create the initial Flask backend structure.
>
> **Prompt:**
> "Based on `@/.docs/ARCHITECTURE.md` and `@/.docs/CODING_STANDARDS.md`, please generate the initial backend boilerplate for our Flask application.
>
> 1.  Create the directory structure inside `backend/`.
> 2.  In `backend/app/__init__.py`, create the Flask app factory (`create_app`) and initialize Flask, Flask-CORS, Flask-SQLAlchemy, Flask-Migrate, and Flask-JWT-Extended.
> 3.  In `backend/config.py`, create a `Config` class with `SECRET_KEY`, `SQLALCHEMY_DATABASE_URI`, and `JWT_SECRET_KEY` variables. The database URI should point to a `project.db` file in the instance folder.
> 4.  In `backend/run.py`, create the entry point to run the application.
> 5.  Create empty placeholder files: `app/models.py`, `app/schemas.py`, and `app/resources/auth.py`.
> 6.  Create an initial `tests/conftest.py` with fixtures for `app` and `client`."

**Prompt 1.2 (Frontend Boilerplate)**
> **Goal:** Create the initial React frontend structure.
>
> **Prompt:**
> "Using Vite, initialize a new React project in the `frontend/` directory.
>
> 1.  Use the `React + SWC` template.
> 2.  After initialization, install the following dependencies: `axios`, `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`.
> 3.  Configure TailwindCSS by creating `tailwind.config.js` and `postcss.config.js` and updating `index.css` with the Tailwind directives.
> 4.  Clean up the default `App.jsx` and `App.css` to be a simple "Hello World" component.
> 5.  Create the directory structure inside `frontend/src/` as defined in `@/.docs/ARCHITECTURE.md`: `api/`, `assets/`, `components/common/`, `components/layout/`, `context/`, `pages/`, `utils/`."

---

### Phase 2: TDD Feature Cycle (Example: Create Post)

**Prompt 2.1 (Create Model)**
> **Goal:** Define the data structure for a Post.
>
> **Prompt:**
> "In `backend/app/models.py`, using SQLAlchemy and referencing `@/.docs/ARCHITECTURE.md`, define the `Post` model. It should have the columns: `id` (Integer, PK), `title` (String(100), nullable=False), `content_html` (Text, nullable=False), `created_at` (DateTime, default to `func.now()`), and a foreign key `user_id` referencing the `User` model."

**Prompt 2.2 (Create Failing Test for Endpoint)**
> **Goal:** Write a test for the "create post" API endpoint that will fail.
>
> **Prompt:**
> "In a new file `backend/tests/test_posts.py`, write a Pytest test function named `test_create_post`. This test should:
> 1. Use the `client` fixture to make a `POST` request to a `/api/posts` endpoint.
> 2. The request payload should contain `title` and `content_html`.
> 3. The request should also include a valid JWT for an authenticated user.
> 4. Assert that the response status code is `201 Created`.
> 5. Assert that the returned JSON data matches the data that was sent.
>
> This test will fail because the endpoint doesn't exist yet."

**Prompt 2.3 (Implement Endpoint to Pass Test)**
> **Goal:** Write the code to make the failing test pass.
>
> **Prompt:**
> "The test `test_create_post` in `@backend/tests/test_posts.py` is failing. Now, create the minimal code to make it pass.
>
> 1. In a new file `backend/app/resources/post.py`, create a Flask-RESTful `Resource` named `PostListResource`.
> 2. Implement the `post` method. It should be protected by the `@jwt_required()` decorator.
> 3. Inside the `post` method, parse the request arguments for `title` and `content_html`.
> 4. Create a new `Post` model instance with the data and the `user_id` from `get_jwt_identity()`.
> 5. Add it to the database session and commit.
> 6. Return the new post data with a `201` status code.
> 7. Register this resource at the `/api/posts` endpoint in `backend/app/__init__.py`."

---

### Phase 3: Frontend Component Creation

**Prompt 3.1 (Create Component)**
> **Goal:** Create a reusable React component.
>
> **Prompt:**
> "In the `frontend/src/components/common/` directory, create a new file `Card.jsx`. This component should be a simple presentational component.
>
> 1. It should accept `children` as a prop.
> 2. The root element should be a `div`.
> 3. Using TailwindCSS classes, style the `div` to have a white background, a subtle box shadow, rounded corners (`rounded-lg`), and padding (`p-4`).
> 4. Export the component."