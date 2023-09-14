import { BiLogIn } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <div className="login_box">
        <BiLogIn className="login" /> Log In
      </div>

      <div className="title">
        <h1>ToDo App</h1>
      </div>

      <div className="menu">Menu</div>
    </header>
  );
};

export default Header;
