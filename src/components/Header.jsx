import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="login_box">
        <Link className="links" to="/login">
          <BiLogIn className="login" /> Log In
        </Link>
      </div>

      <div className="title">
        <Link className="links" to="/">
          <h1>ToDo App</h1>
        </Link>
      </div>

      <div className="menu">Menu</div>
    </header>
  );
};

export default Header;
