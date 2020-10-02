import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import useDarkMode from "@hooks/ToggleTheme";
import { GlobalStyle, darkTheme, lightTheme } from "@styles";

function SetTheme({ element }) {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout handleTheme={toggleTheme} theme={theme}>
        {element}
      </Layout>
    </ThemeProvider>
  );
}

function wrapRootElement({ element }) {
  return <SetTheme element={element} />;
}

export { wrapRootElement };
