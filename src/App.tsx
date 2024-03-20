import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";
import { fetchTasksFromLocalStorage } from "./utils/storage";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = fetchTasksFromLocalStorage();

    if(savedTasks) {
      setTasks(() => [...savedTasks]);
    }
  }, [])


  return (
    <div className="w-screen h-screen mt-8 flex flex-col items-center">
      <h1 className="text-center uppercase z-10 mb-8 font-[Neucha] text-4xl font-bold">
        Taskmaster
      </h1>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
