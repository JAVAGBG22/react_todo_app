import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import todoData from "../data/TodoData";

const Home = () => {
  const [todos, setTodos] = useState(todoData);

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container">
      <TodoForm />
      <TodoList todo={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
