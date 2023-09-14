import { useState } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  //const [title, setTitle] = useState("This is a title");
  //const [task, setTask] = useState("This is a task");
  const [done, setDone] = useState(todo.done);

  const handleChange = (e) => {
    setDone(e.target.checked);
  };

  return (
    <Card>
      <div className="flex-container">
        <div className="title">{todo.title}</div>

        <div className="btns">
          <MdEdit
            style={{ color: "#f7cd62", marginRight: ".5rem" }}
            onClick={() => editTodo(todo)}
          />
          <MdDeleteForever
            style={{ color: "#ed844f" }}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
      <div className="task">{todo.task}</div>

      <div className="flex-container">
        <div className="day">
          <MdOutlineCalendarToday className="calendar" />
          <p>{todo.day}</p>
        </div>

        <Checkbox
          label={done === true ? "Done" : "Doing"}
          value={done}
          onChange={handleChange}
        />
      </div>
    </Card>
  );
};

export default TodoItem;
