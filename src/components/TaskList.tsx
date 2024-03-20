import React from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface Props {
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList = ({tasks, setTasks}: Props) => {
  return (
    <ul className='flex flex-col w-[80%] mt-8'>
        {tasks.map((task, index) => {
            return <TaskItem key={index} task={task} setTasks={setTasks}></TaskItem>
        })}
    </ul>
  )
}

export default TaskList