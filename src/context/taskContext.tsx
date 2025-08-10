import { createContext, useContext } from "react";
import { useTasks } from "../hooks/useTasks";

type TaskContextType = ReturnType<typeof useTasks>;

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const taskState = useTasks();
  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used inside TaskProvider");
  }
  return context;
}
