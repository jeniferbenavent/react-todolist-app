import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Task } from '../interfaces/todolist-interfaces';

export function useToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleAddTask = (taskText: any) => {
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
    setEditIndex(null);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = e.target.value;
    setTasks(updatedTasks);
  };

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
  
  const handleAddTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      handleAddTask(newTask);
      setNewTask("");
    }
  };
  return {
    tasks,
    editIndex,
    newTask,
    handleAddTask,
    handleCheckboxChange,
    handleInputChange,
    handleAddTaskChange,
    handleSubmit,
    editButton,
    checkButton,
    deleteButton,
  };
}