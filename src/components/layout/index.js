import * as React from "react";
import PropTypes from "prop-types";

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

function Layout(props) {
  const { children } = props;
  return <div>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
