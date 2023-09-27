import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import { AuthProvider } from "./context/AuthContext";
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
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;

//   <Route path="/" element={<MultipleState />} />
