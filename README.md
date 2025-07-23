# Frontend Interface for URL Shortener Application

## 1. Overview

This project is a React-based frontend application designed to interact with a backend API that shortens long URLs. The frontend provides an intuitive user interface for entering URLs, submitting them to the backend, and displaying the resulting shortened URLs.

---

## 2. Architecture Overview

+----------------------------+

React Frontend
- Input Form Component
- Result Display Component
- API Communication Layer
+----------------------------+

---

## 3. Key Design Decisions

### Framework

- **React.js**  
  Justification: React provides a modular, reusable, and declarative structure which is ideal for building responsive UIs with clear state management.

### Component Breakdown

- `App.jsx`: Root component managing global state and layout.
- `UrlForm.jsx`: Form for users to enter long URLs.
- `ShortenedUrlList.jsx`: Displays list of shortened URLs received from backend.

### Routing
- Currently implemented as a single-page structure.

<img width="1874" height="1017" alt="Screenshot 2025-07-23 124041" src="https://github.com/user-attachments/assets/b31f10b1-053b-4788-9a86-f6fbce88e98b" />

---

## 4. Data Flow

1. User inputs a long URL into the form.
2. On submission, frontend sends a `POST` request to the backend API.
3. The response (shortened URL) is displayed to the user.
4. The frontend updates the UI dynamically without a page reload.

---

## 5. Technology Stack

| Layer     | Technology         | Justification                                      |
|-----------|--------------------|----------------------------------------------------|
| UI        | React.js           | Component-based SPA, efficient DOM updates         |
| Styling   | basic CSS          | Customizable and maintainable styling              |
| HTTP      | fetch              | Lightweight HTTP client for API communication      |
| State     | useState / useEffect | Built-in React hooks for state and lifecycle     |
| Build Tool| Vite               | Fast development                                   |

---
