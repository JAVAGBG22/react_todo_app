import Card from "./Card";
import Button from "./Button";

const TodoForm = () => {
  return (
    <Card create={true}>
      <form>
        <div className="form-container">
          <h1>Add ToDo</h1>
          <label>Title</label>
          <input />
          <label>Day</label>
          <select>
            <option value="" disabled={true}>
              Select day
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <Button type="submit">
            <p>Add ToDo</p>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
