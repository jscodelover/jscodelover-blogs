import * as React from "react";
import useDarkMode from "@hooks/useDarkMode";

const ColorThemeContext = React.createContext("");

const ColorThemeProvider = props => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ColorThemeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </ColorThemeContext.Provider>
  );
};

export { ColorThemeContext, ColorThemeProvider };
