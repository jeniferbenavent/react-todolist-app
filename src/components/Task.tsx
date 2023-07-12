import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useToDoList } from '../hooks/useToDoList'

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
    <>
      {tasks.map((task, index) => (
        <div key={index} className='flex justify-between mt-5'>
          <div>
            <input
              type="checkbox"
              value={index}
              className="mr-2"
              onChange={() => handleCheckboxChange(index)}
            />
            {editIndex === index ? ( // Edit Btn
              
              <div>
                <input
                  type='text'
                  value={task.text}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button onClick={() => checkButton()}>
                  <CheckIcon />
                </button>
              </div>

            ) : (

              <span className={task.isChecked ? 'line-through text-gray-500' : 'no-underline'}>
                { task.text }
              </span>

            )}
          </div>

          <div>
            <button onClick={() => editButton(index)}>
              <EditIcon fontSize="medium"/>
            </button>
            <button onClick={() => deleteButton(index)}>
              <ClearIcon fontSize="medium" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task