import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      task,
      day,
    };

    addTodo(newTodo);
    console.log(newTodo);

    setTitle("");
    setTask("");
    setDay("");
  };

  return (
    <Card create={true}>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Add ToDo</h1>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Task</label>
          <input value={task} onChange={(e) => setTask(e.target.value)} />
          <label>Day</label>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="" disabled={true}>
              Select day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <Button type="submit">
            <p>Add ToDo</p>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
