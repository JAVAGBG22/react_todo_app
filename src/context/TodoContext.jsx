import { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// create context
const TodoContext = createContext();

// context provider
const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [todoDone, setTodoDone] = useState({
    item: {},
    done: false,
  });

  // load todos
  /* useEffect(() => {
    fetchTodos();
  }, [todo]); */

  // fetch todos
  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${apiUrl}/test/todo`);
      setTodo(res.data);
    } catch (err) {
      console.log("Error fetching data: " + err);
    }
  };

  // add todos
  const addTodo = async (newTodo) => {
    try {
      const res = axios.post(`${apiUrl}/test/todo`, newTodo);
    } catch (err) {
      console.log("Error fetching data: " + err);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, fetchTodos, todoDone, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
