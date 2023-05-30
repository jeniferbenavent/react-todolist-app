import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import './MainCard.css'

function MainCard() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    // Cargar las tareas almacenadas en el localStorage al cargar la página
    const storedTasks = localStorage.getItem("tasks");
    console.log(storedTasks); //SALE VACIO AL RECARGAR
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Guardar las tareas en el localStorage cada vez que se actualicen
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
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
              <button>
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