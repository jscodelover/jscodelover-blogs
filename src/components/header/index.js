import * as React from "react";
import { Menu } from "@components";
import { IconLogo } from "@components/icons";
import { StyleNav } from "./header-style.js";

function Header(props) {
  const { theme, handleTheme } = props;
  return (
    <StyleNav scrollDirection="up">
      <IconLogo theme={theme} />
      <Menu handleTheme={handleTheme} theme={theme} />
    </StyleNav>
  );
}

export default Header;
