import React from "react";

const useTheme = (startingTheme = "light") => {
  const [theme, setTheme] = React.useState(startingTheme);

  const validateTheme = (themeValue) => {
    if (themeValue === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return { theme, setTheme: validateTheme };
};

export default useTheme;
