import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import {
  IconLogo,
  IconTheme,
  IconHamBurger,
  IconCross,
} from "@components/icons";
import { ColorThemeContext } from "@context";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { menu } from "@utils/menu";
import {
  StyleNav,
  StyleLinks,
  StyleMenu,
  StyleHamburgerButton,
  StyleSidebar,
} from "./header-style.js";

function Header(props) {
  const [showSideBar, handleShowSidebar] = React.useState(false);
  const wrapperRef = React.useRef();
  const [theme, toggleTheme] = React.useContext(ColorThemeContext);

  React.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Call hook passing in the wrapperRef and a function to call on outside click
  useOnClickOutside(wrapperRef, () => handleShowSidebar(false));

  function onResize(e) {
    if (e.currentTarget.innerWidth > 768) {
      handleShowSidebar(false);
    }
  }

  function openSidebar() {
    handleShowSidebar(true);
  }

  function closeSidebar() {
    handleShowSidebar(false);
  }

  function changeTheme() {
    props.handleTheme();
    toggleTheme();
  }

  const { scrollDir, scrolledToTop } = props;
  return (
    <>
      <Helmet>
        <body className={showSideBar ? "blur" : ""} />
      </Helmet>
      <StyleNav scrollDirection={scrollDir} scrolledToTop={scrolledToTop}>
        <IconLogo theme={theme} />
        <StyleLinks>
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
              <button onClick={changeTheme}>
                <IconTheme theme={theme} device="d" />
              </button>
            </li>
          </ul>
        </StyleLinks>
        <StyleSidebar>
          <div ref={wrapperRef}>
            <button onClick={changeTheme}>
              <IconTheme theme={theme} device="m" />
            </button>
            <StyleHamburgerButton onClick={openSidebar}>
              <IconHamBurger theme={theme} />
            </StyleHamburgerButton>
            <StyleMenu showSideBar={showSideBar}>
              <nav>
                <button onClick={closeSidebar}>
                  <IconCross theme={theme} />
                </button>
                <ul>
                  {menu.map(item => (
                    <li key={item.to} onClick={closeSidebar}>
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
                </ul>
              </nav>
            </StyleMenu>
          </div>
        </StyleSidebar>
      </StyleNav>
    </>
  );
}

export default Header;
