import { useReducer, useEffect, useCallback } from "react";
import { nanoid } from "nanoid";
import type { Task } from "../types/task";

type Action =
  | { type: "ADD"; payload: Omit<Task, "id" | "createdAt" | "updatedAt"> }
  | { type: "UPDATE"; payload: Task }
  | { type: "DELETE"; payload: { id: string } }
  | { type: "LOAD"; payload: Task[] };

function tasksReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "ADD": {
      const newTask: Task = {
        ...action.payload,
        id: nanoid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return [...state, newTask];
    }
    case "UPDATE":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...action.payload, updatedAt: new Date().toISOString() }
          : task
      );
    case "DELETE":
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}

export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      dispatch({ type: "LOAD", payload: JSON.parse(stored) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(
    (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
      dispatch({ type: "ADD", payload: task });
    },
    []
  );

  const updateTask = useCallback((task: Task) => {
    dispatch({ type: "UPDATE", payload: task });
  }, []);

  const deleteTask = useCallback((id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  }, []);

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
