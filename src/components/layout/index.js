import * as React from "react";
import PropTypes from "prop-types";
import useDarkMode from "@hooks/ToggleTheme";

function Layout(props) {
  const [theme, toggleTheme] = useDarkMode();
  console.log(props);
  function handleClick() {
    toggleTheme();
    props.handleTheme(theme);
  }
  const { children } = props;
  return (
    <div>
      <button onClick={handleClick}>{theme}</button>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
