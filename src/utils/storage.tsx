import { Task } from "../types/Task";

export const saveTasksToLocalStorage = (data: Task[]): void => {
  localStorage.setItem("tasks", JSON.stringify(data));
};

export const fetchTasksFromLocalStorage = (): Task[] | null => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    return JSON.parse(tasks);
  }

  return null;
};

export const clearTasksFromLocalStorage = () => {
  localStorage.clear();
};
