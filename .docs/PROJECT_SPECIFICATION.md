# Project Specification: Developer Showcase

This document outlines the features and user stories for the application. The AI assistant should reference this file to understand the *what* and *why* of a feature request.

## 1. High-Level Goals

* A personal, professional website for a developer to showcase their biography, blog, and projects.
* An admin interface for content management.
* A clean, minimalist, and tech-focused design.
* A robust backend API and a responsive React frontend.

## 2. Feature Breakdown & User Stories

### 2.1 Core & Landing Page (Blog)
- **As an admin,** I want to create, edit, and delete blog posts so I can share my thoughts and updates.
- **As an admin,** I want blog posts to support rich text formatting, embedded images, and hyperlinks.
- **As an admin,** I want to embed YouTube videos in a post by providing a URL, and they should be playable in-browser.
- **As an admin,** I want to display a PDF file in a post as an interactive carousel.
- **As a visitor,** I want to see a paginated list of blog posts on the landing page, with the newest first.
- **As a visitor,** I want to click on a hyperlink and see a preview of the linked page.

### 2.2 Developer Bio Page
- **As an admin,** I want a dedicated bio page to introduce myself.
- **As an admin,** I want to be able to upload/change a profile picture and a background image for the page.
- **As an admin,** I want to edit my short bio text directly in the browser.
- **As a visitor,** I want to see the developer's contact information (email, phone).
- **As a visitor,** I want to submit my email address via a form to be contacted later.
- **As an admin,** I want to view a list of all captured visitor emails in the admin dashboard.

### 2.3 About Me Page
- **As an admin,** I want an "About Me" page with more detailed information.
- **As an admin,** I want to edit a large text block with my full professional story in-browser.
- **As an admin,** I want to add a list of relevant links (e.g., GitHub, LinkedIn, Twitter).
- **As an admin,** I want to upload multiple pictures to a carousel gallery on this page.
- **As an admin,** I want to upload a featured video to this page.
- **As a visitor,** the picture carousel and video sections should be hidden if no content has been uploaded.

### 2.4 Admin & Authentication
- **As an admin,** I want to access the admin dashboard via a secret, non-linked URL (e.g., `/admin`).
- **As an admin,** I want to log in with a username and password to secure the admin area.
- **As an unauthenticated user,** I should be redirected from any admin route to the main page or a login page.

### 2.5 Project Showcase
- **As an admin,** I want to add, edit, and remove projects from my showcase.
- **As an admin,** each project should have a title, description, link to the live app, and link to the source code.
- **As a visitor,** I want to view a list of all projects.
- **(Advanced Feature)** **As a visitor,** I want to view specific, simple "nested" applications directly on the project page. The initial build will include 3 boilerplate examples (React/Flask/SQLite) that are served as part of the main application's static content.

---