import React, { useState } from "react";
import { Task } from "../types/Task";
import { saveTasksToLocalStorage } from "../utils/storage";

interface Props {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskInput({tasks, setTasks}: Props) {
  const [task, setTask] = useState<string>("");
  const [formError, setFormError] = useState("");

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(task !== ""){
      const item: Task = {
        description: task,
        isComplete: false
      };

      for(let i = 0; i < tasks.length; i++){
        if(tasks[i].description === task){
          setFormError("Task already exists");
          return;
        }
      }

      setTasks((tasks) => [...tasks, item]);
      saveTasksToLocalStorage([...tasks, item]);
    }

    setTask("");
    setFormError("");
  }

  return (
    <form className="flex flex-col w-[90%] relative items-center" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full rounded-full pt-5 pb-5 pl-8 pr-8 text-2xl text-gray-500 border-none transition-[0.2s] shadow-[inset_0_0_5px_black] focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.5)]"
      />
      <button type="submit" className="absolute right-0 w-12 h-12 bg-blue-400 border-none rounded-full m-3 text-white text-lg transition-[0.2s_all] shadow-[0_0_10px_black] hover:bg-blue-500 active:scale-[0.8] active:shadow-[0_0_5px_black]">Go</button>
      {formError && <p className="text-xl text-red-500 font-bold uppercase">{formError}</p>}
    </form>
  );
}

export default TaskInput;
