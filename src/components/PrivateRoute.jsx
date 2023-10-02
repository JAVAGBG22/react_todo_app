import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // redirecta till login
    return <Navigate to="/login" />;
  }

  if (user.roles?.includes("ROLE_MODERATOR", "ROLE_USER")) {
    console.log("User is logged in");
    return <>{children}</>;
  }
};

export default PrivateRoute;
