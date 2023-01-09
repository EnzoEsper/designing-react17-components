import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children, initialLoogedInUser }) => {
  const [loggedInUser, setLoggedInUser] = React.useState(initialLoogedInUser);

  return <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
