import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "@components";
import { GlobalStyle, darkTheme, lightTheme } from "@styles";

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

function wrapRootElement({ element }) {
  let theme = "dark";
  function setTheme(mode) {
    theme = mode;
  }
  console.log(theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout handleTheme={mode => setTheme(mode)}>{element}</Layout>
    </ThemeProvider>
  );
}

export { wrapRootElement };
