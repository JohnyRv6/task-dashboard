# 📝 Task Dashboard

A **minimal and functional Task Dashboard** built with **React + TypeScript**, designed to manage tasks easily, with support for filtering, sorting, and form validation.

This project showcases best practices in React, **global state management** via Context API, form validation with **Zod**, and forms powered by **React Hook Form**.

---

## 🚀 Tech Stack

- **React 18** with Vite
- **TypeScript**
- **React Hook Form** + **Zod** (form validation)
- **Tailwind CSS** (styling)
- **Context API** for global state
- **LocalStorage** for data persistence
- **ESLint + Prettier** (code formatting and linting)

---

## 📂 Project Structure

src/
├── components/        # Reusable components (TaskList, FilterBar, TaskForm, TaskEditModal, etc.)
├── context/           # Global context for task management
├── pages/             # Main pages (TasksPage, HomePage, etc.)
├── types/             # TypeScript type definitions
├── hooks/             # Custom hooks (useTasks, etc.)
├── styles/            # Global styles
└── main.tsx           # App entry point

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it as you wish.

---

## ✨ Author

Created by Johnny Ramírez 🧑‍💻

---

## 📦 Installation & Usage

```bash
# Clone the repository
git clone https://github.com/your-username/task-dashboard.git
cd task-dashboard

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Preview the production build
pnpm preview
