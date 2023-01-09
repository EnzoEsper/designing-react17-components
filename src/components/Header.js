import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import withAuth from "./withAuth";

function Header({ loggedInUser, setLoggedInUser }) {
  const { theme } = useContext(ThemeContext);

  const LoggedIn = ({ loggedInUser, setLoggedInUser }) => {
    return (
      <div>
        <span>Welcome {loggedInUser}</span>
        <button className="btn btn-secondary" onClick={() => setLoggedInUser("")}>
          Log Out
        </button>
      </div>
    );
  };

  const NotLoggedIn = ({ loggedInUser, setLoggedInUser }) => {
    return (
      <div>
        <button
          className="btn btn-secondary"
          onClick={(event) => {
            event.preventDefault();
            const username = window.prompt("Enter Login Name:", "");
            setLoggedInUser(username);
          }}
        >
          Log In
        </button>
      </div>
    );
  };

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            ) : (
              <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
