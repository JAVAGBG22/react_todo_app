import PropTypes from "prop-types";

const Card = ({ children, create }) => {
  return (
    <div
      className="todo-card"
      style={{
        backgroundColor: create ? "#2e2e2e" : "#1c1c1c",
        padding: create ? "4rem" : "3rem",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  create: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  create: PropTypes.bool,
};

export default Card;
