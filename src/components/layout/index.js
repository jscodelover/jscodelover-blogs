import * as React from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import { Header, Footer, Social } from "@components";
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

  const { handleTheme, children } = props;
  return (
    <Location>
      {({ location }) => (
        <>
          <Header
            handleTheme={handleTheme}
            scrollDir={scrollDir}
            scrolledToTop={scrolledToTop}
          />
          <Social />
          <StyleContent>
            <main>{children}</main>
            <Footer location={location} />
          </StyleContent>
        </>
      )}
    </Location>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
