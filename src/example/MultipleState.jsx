import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MultipleState = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "" });
    }
  };

  return (
    <div className="container" style={{ color: "black" }}>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Add Person
        </button>
      </form>

      <div style={{ marginTop: "3rem" }}>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div style={{ marginTop: "3rem" }} key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleState;
