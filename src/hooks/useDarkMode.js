import * as React from "react";

function useDarkMode() {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    console.log("theme", theme);
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }
  return [theme, toggleTheme];
}

export default useDarkMode;
