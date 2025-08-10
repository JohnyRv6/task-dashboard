import TaskForm from "../components/taskForm";
import { useTaskContext } from "../context/taskContext";
import { useNavigate } from "react-router-dom";
import type { TaskFormData } from "../schemas/taskSchema";

export default function NewTaskPage() {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const handleSubmit = (values: TaskFormData) => {
    addTask(values);
    navigate("/tasks");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New Task</h1>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
