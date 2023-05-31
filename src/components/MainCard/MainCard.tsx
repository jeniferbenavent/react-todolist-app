import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import './MainCard.css'

function MainCard() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task: string) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteButton = (index: number) => {
    const deleteTasks = [...tasks];
    deleteTasks.splice(index, 1);
    setTasks(deleteTasks);
    localStorage.setItem('tasks', JSON.stringify(deleteTasks));
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
                  id={`task-${index}`}
                  className='card-todolist-tasks-checkbox'/>
                  {task}
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