import { useState } from "react";

const TodoItem = ({ todo }) => {
  //const [title, setTitle] = useState("This is a title");
  //const [task, setTask] = useState("This is a task");

  return (
    <div
      className="todo-card"
      style={{ backgroundColor: "#1c1c1c", padding: "3rem", color: "white" }}
    >
      <div className="title">{todo.title}</div>
      <div className="task">{todo.task}</div>
    </div>
  );
};

export default TodoItem;
