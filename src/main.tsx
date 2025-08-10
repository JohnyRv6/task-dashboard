import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import TasksPage from "./pages/tasksPage";
import TaskDetailPage from "./pages/taskDetailPage";
import NewTaskPage from "./pages/newTaskPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "tasks", element: <TasksPage /> },
      { path: "tasks/new", element: <NewTaskPage /> },
      { path: "tasks/:id", element: <TaskDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
