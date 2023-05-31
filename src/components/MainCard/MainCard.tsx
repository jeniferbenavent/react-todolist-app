import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import './MainCard.css'

function MainCard() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([]);

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

  const handleCheckboxChange = (index: number) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
  };
  
  const deleteButton = (index: number) => {
    const deleteTasks = [...tasks];
    deleteTasks.splice(index, 1);
    setTasks(deleteTasks);

    // Checkboxes
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
    
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
                  id={`checkbox-${index}`}
                  checked={checkboxStates[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                  className='card-todolist-tasks-checkbox'/>
                  <span className={checkboxStates[index] ? 'stroke' : 'none-stroke'}>
                    { task }
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