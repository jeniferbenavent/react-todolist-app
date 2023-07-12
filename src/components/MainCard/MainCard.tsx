import { useToDoList } from '../../hooks/useToDoList';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Task from '../Task/Task';
import './MainCard.css';

function MainCard() {
  const { addTask } = useToDoList();

  return (

    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
        {/* TITLE */}
        <div className="relative flex flex-row justify-between">
          <div className="flex items-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
              <span className="material-symbols-rounded h-6 w-6 text-brand-500 dark:text-white">
                check_circle
              </span>
            </div>
            <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
              Tasks
            </h4>
          </div>
          <button
            className='flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg'
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
          </button>
        </div>
        <AddTaskForm addTask={addTask} />
        <Task />
      </div>
    </div>
  );
}

export default MainCard;