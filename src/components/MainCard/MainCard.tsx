import { useState } from 'react';
import { Form } from 'react-bootstrap';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { Task } from '../../interfaces/todolist-interfaces';
import './MainCard.css'

function MainCard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    setTasks(updatedTasks);
  };

  const deleteButton = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (taskText: string) => {
    const newTask = {
      text: taskText,
      isChecked: false,
    };
  
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <section className='card-container'>
      <div className='card'>
        <h1 className='card-title'>To Do List</h1>
        <AddTaskForm addTask={addTask} />
        <div className='card-todolist'>
          {tasks.map((task, index) => (
            <div key={index} className='card-todolist-tasks'>
              <div className='card-todolist-tasks-div'>
                <Form.Check 
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={task.isChecked}
                  onChange={() => handleCheckboxChange(index)}
                  className='card-todolist-tasks-checkbox'/>
                  <span className={task.isChecked ? 'stroke' : 'none-stroke'}>
                    { task.text }
                  </span>
              </div>
              <button key={index} onClick={() => deleteButton(index)}>
                <img src='/static/icons/trash.png' width='16px' height='16px' />
              </button>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
}

export default MainCard