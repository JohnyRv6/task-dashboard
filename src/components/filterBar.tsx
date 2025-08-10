import { type FC } from "react";

interface FilterBarProps {
  statusFilter: string;
  priorityFilter: string;
  sortBy: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export const FilterBar: FC<FilterBarProps> = ({
  statusFilter,
  priorityFilter,
  sortBy,
  onStatusChange,
  onPriorityChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-50 rounded-lg shadow">
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">No Sort</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};
