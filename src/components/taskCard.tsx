import type { Task } from "../types/task";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onDelete }: TaskCardProps) {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col justify-between border border-gray-200">
      <div>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
            {task.status}
          </span>
          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">
            {task.priority}
          </span>
        </div>

        {task.dueDate && (
          <p className="text-xs text-gray-500 mt-2">
            Due: {format(new Date(task.dueDate), "PPP")}
          </p>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/tasks/${task.id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
