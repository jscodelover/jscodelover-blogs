import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { IconLogo, IconTheme, IconHamBurger } from "@components/icons";
import { menu } from "@utils/menu";
import { StyleNav, StyleMenu, StyleHamburgerButton } from "./header-style.js";

function Header(props) {
  const [showSideBar, handleShowSidebar] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function onResize(e) {
    if (e.currentTarget.innerWidth > 768) {
      console.log(e.currentTarget.innerWidth > 768);
      handleShowSidebar(false);
    }
  }

  const { theme, handleTheme, scrollDir, scrolledToTop } = props;
  return (
    <>
      <Helmet>
        <body className={showSideBar ? "blur" : ""} />
      </Helmet>
      <StyleNav scrollDirection={scrollDir} scrolledToTop={scrolledToTop}>
        <IconLogo theme={theme} />
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
        <StyleHamburgerButton>
          <IconHamBurger theme={theme} />
        </StyleHamburgerButton>
      </StyleNav>
    </>
  );
}

export default Header;
