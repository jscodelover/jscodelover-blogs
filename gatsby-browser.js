import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import { ColorThemeProvider } from "@context";
import useDarkMode from "@hooks/useDarkMode";
import { GlobalStyle, darkTheme, lightTheme, appTheme } from "@styles";

function SetTheme({ element }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeObj = theme === "light" ? lightTheme : darkTheme;
  return (
    <ColorThemeProvider>
      <ThemeProvider theme={{ ...appTheme, ...themeObj }}>
        <GlobalStyle />
        <Layout handleTheme={toggleTheme}>{element}</Layout>
      </ThemeProvider>
    </ColorThemeProvider>
  );
}

function wrapRootElement({ element }) {
  return <SetTheme element={element} />;
}

export { wrapRootElement };
