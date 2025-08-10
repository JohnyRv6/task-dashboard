import { useMemo, useState } from "react";
import { FilterBar } from "../components/filterBar";
import { useTasks } from "../hooks/useTasks";
import { TaskList } from "../components/taskList";

export default function TasksPage() {
  const { tasks } = useTasks();
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    if (statusFilter) {
      result = result.filter((t) => t.status === statusFilter);
    }

    if (priorityFilter) {
      result = result.filter((t) => t.priority === priorityFilter);
    }

    if (sortBy === "dueDate") {
      result.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
    }

    if (sortBy === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    return result;
  }, [tasks, statusFilter, priorityFilter, sortBy]);

  return (
    <div className="space-y-4">
      <FilterBar
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        sortBy={sortBy}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
        onSortChange={setSortBy}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
