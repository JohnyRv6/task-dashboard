import TaskForm, { type TaskFormValues } from "../components/taskForm";
import { useTasks } from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export default function NewTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (values: TaskFormValues) => {
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
