import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import todoData from "./data/TodoData";
import Home from "./components/Home";
import Login from "./components/Login";
import MultipleState from "./example/MultipleState";

function App() {
  //const [todos, setTodos] = useState(todoData);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//   <Route path="/" element={<MultipleState />} />
