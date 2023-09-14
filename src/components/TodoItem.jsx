import { useState } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import Card from "./Card";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  //const [title, setTitle] = useState("This is a title");
  //const [task, setTask] = useState("This is a task");

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
    </Card>
  );
};

export default TodoItem;
