import Header from "./Header";
import React, { useState } from "react";
import Speakers from "./Speakers";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;