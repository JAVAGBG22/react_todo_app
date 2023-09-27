import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Card from "./Card";
import Button from "./Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Fill in your username and password!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          username,
          password,
        }
      );

      dispatch({
        type: "LOGIN",
        payload: data,
      });

      // set user in localstorage
      window.localStorage.setItem("user", JSON.stringify(data));
      console.log("User logged in");

      // redirect user to home page

      return navigate("/");
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <div className="container">
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <label>Username:</label>
            <input
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-container">
            <label>Password:</label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit">
            <p>Log In</p>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
