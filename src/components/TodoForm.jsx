import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Card from "./Card";
import Button from "./Button";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      day,
      done: false,
    };

    addTodo(newTodo);
    console.log(newTodo);

    setTitle("");
    setDescription("");
    setDay("");
  };

  return (
    <Card create={true}>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Add ToDo</h1>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
