import styled, { css } from "styled-components";

const StyleNav = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  transition: var(--transition);
  backdrop-filter: blur(4px);

  ${props =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.cardShadow};
    `};

  ${props =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(calc(var(--nav-height) * -1));
      box-shadow: 0 10px 30px -10px ${({ theme }) => theme.cardShadow};
    `};

  .link {
    display: inline-block;
    font-weight: 500;
    font-size: clamp(var(--fz-sm), 4vw, var(--fz-md));
    color: ${({ theme }) => theme.text1};
  }
  .active-link {
    color: ${({ theme }) => theme.highlight};
  }

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyleLinks = styled.nav`
  ul {
    display: flex;
    align-items: center;
    li {
      .link {
        transition: var(--transition);
        &:hover {
          transform: translateY(-3px);
        }
      }
      &:not(:last-child) {
        margin-right: 35px;
      }
      &:last-child {
        height: 22px;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleHamburgerButton = styled.button`
  display: none;
  margin-left: 23px;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const StyleSidebar = styled.div`
  display: none;
  & > div {
    display: flex;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyleMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 10px;
  width: min(75vw, var(--sidebar-width));
  height: 100vh;
  transition: var(--transition);
  background-color: ${({ theme }) => theme.body};

  ${props =>
    props.showSideBar &&
    css`
      transform: translateX(0vw);
      visibility: visible;
      box-shadow: -10px 0px 30px -15px ${({ theme }) => theme.headerShadow};
    `};

  ${props =>
    !props.showSideBar &&
    css`
      transform: translateX(100vw);
      visibility: hidden;
      box-shadow: -10px 0px 30px -15px ${({ theme }) => theme.headerShadow};
    `};
  nav {
    position: relative;
    button {
      position: absolute;
      top: 30px;
      right: 25px;
      svg {
        width: 24px;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      li {
        &:not(:last-child) {
          padding-bottom: 50px;
        }
      }
    }
  }
`;

export { StyleNav, StyleMenu, StyleHamburgerButton, StyleSidebar, StyleLinks };
