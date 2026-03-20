#  Anisha's Blog App

A simple Blog Application built using **Next.js (App Router)**, **Zustand**, and **Local Storage**.

---

##  Project Overview

This application allows users to:

- Register and login
- View blog posts
- Create, edit, and delete blogs
- Manage session using Zustand + Local Storage

---

##  Tech Stack

- **Frontend Framework:** Next.js (App Router)
- **State Management:** Zustand (with slices)
- **Storage:** Local Storage (persist middleware)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Alerts:** SweetAlert2

---

##  Folder Structure

```
src/
│
├── app/                # Next.js App Router pages
│   ├── (auth)/         # Login & Register
│   ├── (blog)/         # Blog related pages
│
├── Components/         # Reusable UI components
│
├── store/              # Zustand slices
│   ├── authStore.ts
│   ├── blogStore.ts
│
├── types/              # TypeScript types
│
├── utils/              # Helper functions
```

---

## Authentication

- Authentication is handled using **Zustand**
- User session is persisted using **localStorage**
- Protected routes are implemented using a custom **ProtectedRoute component**

---

##  Features

- User Registration & Login
- Blog Creation
- Blog Editing & Deletion
- Single Blog View
- Persistent State using localStorage
- Clean UI with Tailwind CSS

---

##  Important Notes

- This project uses **localStorage only (no backend)**
- Data is stored in browser and persists across reloads


##  Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open: http://localhost:3000

---

##  Deployment

LIVE-LINK ------> "https://zustandblogapp.vercel.app/login" 


---

##  Author

**Anisha Ghosh**

---


