import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo, isLoading } = useContext(TodoContext);

  if (!todo || todo.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
