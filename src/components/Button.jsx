import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";

const Button = ({ children, type, isDisabled }) => {
  return (
    <button className="btn" type={type} disabled={isDisabled}>
      <BsPlus fontSize="52px" />
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
