import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
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
      <InputGroup className="mb-3">
        <Form.Control 
          placeholder="Write a task" 
          value={newTask}
          onChange={handleInputChange}/>
        <Button variant="primary" id="button-addon2" type="submit">
          Add
        </Button>
      </InputGroup>
    </form>
  );
}

export default AddTaskForm