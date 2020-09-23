import * as React from "react";
import { Link } from "gatsby";
import { IconTheme } from "@components/icons";
import { menu } from "@utils/menu";
import { StyleMenu } from "./menu-style.js";

function Menu(props) {
  const { theme, handleTheme } = props;
  return (
    <StyleMenu>
      <ul>
        {menu.map(item => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="link"
              activeClassName="active-link"
              partiallyActive={!item.exact}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button className="themeBtn" onClick={handleTheme}>
            <IconTheme theme={theme} />
          </button>
        </li>
      </ul>
    </StyleMenu>
  );
}

export default Menu;
