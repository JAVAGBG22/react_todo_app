import TodoItem from "./TodoItem";

const TodoList = ({ todo, deleteTodo }) => {
  if (!todo || todo.length === 0) {
    return <p>No tasks yet!</p>;
  }

  return (
    <div className="list">
      {todo.map((todo) => (
        <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
