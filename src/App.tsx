import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="w-screen h-screen mt-8 flex flex-col items-center">
      <h1 className="text-center uppercase z-10 mb-8 font-[Neucha] text-4xl font-bold">
        Taskmaster
      </h1>
      <TaskInput tasks={tasks} setTasks={setTasks}/>
      <ul>
        {tasks.map((task, index) => (<li key={index}>{task.description}</li>))}
      </ul>
    </div>
  );
}

export default App;
