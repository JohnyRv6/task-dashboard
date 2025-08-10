import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex gap-4 p-4">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`
            }
          >
            Tasks
          </NavLink>
        </nav>
      </header>

      <main className="container mx-auto flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}