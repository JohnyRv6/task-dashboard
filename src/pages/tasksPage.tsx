import { useTasks } from "../hooks/useTasks";
import TaskCard from "../components/taskCard";
import { Link } from "react-router-dom";

export default function TasksPage() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Link
          to="/tasks/new"
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </Link>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks found. Add one above.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      )}
    </div>
  );
}
