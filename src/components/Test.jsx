import { useEffect } from "react";

const Test = () => {
  /*   useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.roles.includes("ROLE_MODERATOR", "ROLE_USER")) {
      console.log("User has roles");
    } else {
      console.log("User has no roles...");
    }
  }; */

  return (
    <div className="container" style={{ color: "black" }}>
      Test
    </div>
  );
};

export default Test;
