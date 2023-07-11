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
      <div className="mb-3 p-8">
        <input 
          placeholder="Write a task" 
          value={newTask}
          onChange={handleInputChange}/>
        <button type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm