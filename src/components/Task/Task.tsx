import { Form } from 'react-bootstrap';
import { useToDoList } from '../../hooks/useToDoList'

function Task() {
  const {
    tasks,
    editIndex,
    handleCheckboxChange,
    handleInputChange,
    editButton,
    checkButton,
    deleteButton,
  } = useToDoList();

  return(
    <div className='flex justify-between mt-3 mb-3'>
      {tasks.map((task, index) => (
        <div key={index} className='flex'>
          <div>
            <Form.Check
              type='checkbox'
              id={`checkbox-${index}`}
              checked={task.isChecked}
              onChange={() => handleCheckboxChange(index)}
              className='card-todolist-tasks-checkbox'
            />
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={task.text}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button onClick={() => checkButton()}>
                  <img src='/static/icons/cheque.png' width='15px' height='15px' />
                </button>
              </div>
            ) : (
              <span className={task.isChecked ? 'line-through text-gray-500' : 'no-underline'}>
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
  );
}

export default Task