import React from "react";
import "./style.css";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
const LightDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <h1>change light dark mode</h1>
        <button onClick={toggleTheme}>change theme </button>
      </ThemeContext.Provider>
    </div>
  );
};

export default LightDarkMode;
