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

  return (
    <div className='flex justify-between mt-3 mb-3'>
      {tasks.map((task, index) => (
        <div key={index} className='flex'>
          <div>
            <input
              type="checkbox"
              className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                        justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
              name="weekly"
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
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  {task.text}
                </p>
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