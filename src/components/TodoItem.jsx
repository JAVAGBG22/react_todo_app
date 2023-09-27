import { useState, useContext, useEffect } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import { TodoContext } from "../context/TodoContext";
import Card from "./Card";
import Checkbox from "./Checkbox";

const TodoItem = ({ todo }) => {
  //const [title, setTitle] = useState("This is a title");
  //const [description, setdescription] = useState("This is a description");
  const [done, setDone] = useState(todo.done);

  const { todoDone } = useContext(TodoContext);

  useEffect(() => {
    if (todoDone.done === true) {
      setDone(todoDone.item.done);
    }
  }, [todoDone]);

  const handleChange = (e) => {
    setDone(e.target.checked);
  };

  return (
    <Card>
      <div className="flex-container">
        <div className="title">{todo.title}</div>

        <div className="btns">
          <MdEdit style={{ color: "#f7cd62", marginRight: ".5rem" }} />
          <MdDeleteForever style={{ color: "#ed844f" }} />
        </div>
      </div>
      <div className="description">{todo.description}</div>

      <div className="flex-container">
        <div className="day">
          <MdOutlineCalendarToday className="calendar" />
          <p>{todo.day}</p>
        </div>

        <Checkbox
          label={done === true ? "Done" : "Doing"}
          value={done}
          onChange={handleChange}
        />
      </div>
    </Card>
  );
};

export default TodoItem;
