import Title from './Title';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

function MainCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[550px] h-[500px]">
      <Title />
      <AddTaskForm />
      <Task />
    </div>
  );
}

export default MainCard;