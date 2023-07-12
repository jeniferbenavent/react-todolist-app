import { ChangeEvent, FormEvent, useState } from 'react';
import { AddTaskFormProps } from '../../interfaces/todolist-interfaces';
import './AddTaskForm.css'

function AddTaskForm({ addTask }: AddTaskFormProps): JSX.Element {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-72">
              <input
                value={newTask}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className='bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 rounded-xl px-4 py-2 text-base font-medium text-white transition duration-200 dark:text-white"'>
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTaskForm