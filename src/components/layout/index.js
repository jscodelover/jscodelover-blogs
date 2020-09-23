import * as React from "react";
import PropTypes from "prop-types";
import { Header } from "@components";
import { Wrapper } from "./layout-style.js";

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

function Layout(props) {
  const { children, handleTheme, theme } = props;
  return (
    <>
      <Header handleTheme={handleTheme} theme={theme} />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
