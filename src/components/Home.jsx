import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import todoData from "../data/TodoData";

const Home = () => {
  //const [todos, setTodos] = useState(todoData);

  /*  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    //setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      //setTodos(todos.filter((item) => item.id !== id));
    }
  }; */

  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
