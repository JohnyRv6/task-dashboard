import type { FC } from "react";
import type { Task } from "../types/task";
import { useTaskContext } from "../context/taskContext";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
    const { deleteTask, updateTask } = useTaskContext();

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  const handleToggleStatus = (task: Task) => {
    const newStatus = task.status === "Done" ? "In Progress" : "Done";
    updateTask({ ...task, status: newStatus });
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border rounded p-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            {task.description && (
              <p className="text-sm text-gray-600">{task.description}</p>
            )}
            {task.dueDate && (
              <p className="text-xs text-gray-500">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}
            <p className="text-xs mt-1">
              Status:{" "}
              <span
                className={
                  task.status === "Done" ? "text-green-600" : "text-orange-600"
                }
              >
                {task.status}
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleToggleStatus(task)}
              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
            >
              {task.status === "Done" ? "Mark In progress" : "Mark Done"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
