import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Task, TaskStatus, TaskPriority } from "../types/task";
import { taskSchema, type TaskFormData } from "../schemas/taskSchema";

interface TaskFormProps {
  defaultValues?: Partial<Task>;
  onSubmit: (values: TaskFormData) => void;
}

export default function TaskForm({ defaultValues, onSubmit }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      status: (defaultValues?.status as TaskStatus) || "To Do",
      priority: (defaultValues?.priority as TaskPriority) || "Medium",
      dueDate: defaultValues?.dueDate || "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-4 shadow rounded max-w-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          {...register("title")}
          className="w-full border rounded px-2 py-1"
        />
        {errors.title && (
          <p className="text-red-600 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          {...register("description")}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          {...register("status")}
          className="w-full border rounded px-2 py-1"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Priority</label>
        <select
          {...register("priority")}
          className="w-full border rounded px-2 py-1"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          {...register("dueDate")}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
}
