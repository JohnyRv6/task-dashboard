import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { TaskProvider, useTaskContext } from "../context/taskContext";
import NewTaskPage from "../pages/newTaskPage";
import { describe, expect, it } from "vitest";
import { TaskList } from "../components/taskList";

function TaskListWithContext() {
  const { tasks } = useTaskContext();
  return <TaskList tasks={tasks} />;
}

describe("Task CRUD Integration", () => {
  it("creates a new task via NewTaskPage and shows it in TaskList", async () => {
    render(
      <TaskProvider>
        <MemoryRouter initialEntries={["/tasks/new"]}>
          <Routes>
            <Route path="/tasks/new" element={<NewTaskPage />} />
            <Route path="/tasks" element={<TaskListWithContext />} />
          </Routes>
        </MemoryRouter>
      </TaskProvider>
    );

    // Rellenar formulario en la página de nueva tarea
    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: "Test Task" },
    });

    // Enviar formulario
    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    // Ahora debería navegar a /tasks y mostrar la lista con la nueva tarea
    // Esperamos que aparezca "Test Task" en pantalla
    const newTask = await screen.findByText("Test Task");
    expect(newTask).toBeInTheDocument();
  });
});
