import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { Task } from '../../interfaces/todolist-interfaces';
import './MainCard.css'

function MainCard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  const addTask = (taskText: string) => {
    const newTask = {
      text: taskText,
      isChecked: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
     // Desactivar el modo de edición al marcar una tarea como completada
    setEditIndex(null);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {

    const updatedTasks = [...tasks];
    updatedTasks[index].text = e.target.value;
    setTasks(updatedTasks);
  }

  const editButton = (index: number) => {
    setEditIndex(index);
  };

  const checkButton = () => {
    setEditIndex(null);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteButton = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
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
                className='card-todolist-tasks-checkbox'
              />
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                  <button
                    onClick={() => checkButton()}
                  >
                    <img src='/static/icons/cheque.png' width='15px' height='15px' />
                  </button>
                </div>
              ) : (
                <span className={task.isChecked ? 'stroke' : 'none-stroke'}>
                  {task.text}
                </span>
              )}
            </div>
            <div className='card-todolist-tasks-editdelete'>
              <button onClick={() => editButton(index)}>
                <img src='/static/icons/pencil.png' width='15px' height='15px' />
              </button>
              <button onClick={() => deleteButton(index)}>
                <img src='/static/icons/cross-small.png' width='18px' height='18px' />
              </button>
            </div>
          </div>
        ))}
        </div>
      </div> 
    </section>
  );
}

export default MainCard