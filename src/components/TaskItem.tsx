import React from "react";
import { Task } from "../types/Task";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({ task, setTasks }: Props) => {
  return (
    <li className="bg-yellow-500 flex justify-between min-h-12 mt-3 items-center p-5 rounded-md text-lg text-black font-[Neucha]">
      {task.description}
      <div className="flex flex-row justify-around w-12">
        <button className="block">
          <MdDone />
        </button>
        <button className="block">
            <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
