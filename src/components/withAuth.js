import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (Component) => {
  return function (props) {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    return <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props} />;
  };
};

export default withAuth;
