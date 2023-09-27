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

  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

  // FIXED
  // fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(`${apiUrl}/test/todo`);
        //carouselsPrev => [...carouselsPrev, res.data
        setTodo(res.data);
      } catch (err) {
        console.log("Error fetching data: " + err);
      }
    };
    fetchTodos();
  }, []);

  const editTodo = (item) => {
    setTodoEdit({
      item,
      edit: true,
    });
  };

  const doneTodo = (item) => {
    setTodoDone({
      item,
      done: true,
    });
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
      value={{
        todo,
        setTodo,
        todoDone,
        addTodo,
        editTodo,
        todoEdit,
        doneTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
