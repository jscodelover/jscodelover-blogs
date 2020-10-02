import * as React from "react";
import PropTypes from "prop-types";
import { Header } from "@components";
import useScrollDirection from "@hooks/useScrollDirection";
import { StyleContent } from "./layout-style.js";

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

function Layout(props) {
  const [scrolledToTop, handleScrollTop] = React.useState(true);
  const scrollDir = useScrollDirection();

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    handleScrollTop(window.pageYOffset < 50);
  }

  const { children, handleTheme, theme } = props;
  return (
    <>
      <Header
        handleTheme={handleTheme}
        theme={theme}
        scrollDir={scrollDir}
        scrolledToTop={scrolledToTop}
      />
      <StyleContent>
        <main>{children}</main>
      </StyleContent>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
