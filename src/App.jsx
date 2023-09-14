import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import todoData from "./data/TodoData";

function App() {
  const [todos, setTodos] = useState(todoData);

  return (
    <>
      <Header />
      <div className="container" style={{ color: "black" }}>
        <TodoList todo={todos} />
      </div>
    </>
  );
}

export default App;
