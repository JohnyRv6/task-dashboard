import type { FC } from "react";
import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <span
              className={`px-2 py-1 text-xs rounded ${
                task.priority === "High"
                  ? "bg-red-200 text-red-800"
                  : task.priority === "Medium"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {task.priority}
            </span>
          </div>
          {task.description && (
            <p className="text-gray-600">{task.description}</p>
          )}
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Status: {task.status}</span>
            {task.dueDate && (
              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
