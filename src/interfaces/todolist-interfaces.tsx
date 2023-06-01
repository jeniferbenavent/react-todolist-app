export type AddTaskFormProps = {
  addTask: (task: string) => void;
}

export type Task = {
  text: string;
  isChecked: boolean;
}