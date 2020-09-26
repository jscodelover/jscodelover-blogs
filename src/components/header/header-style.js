import styled, { css } from "styled-components";

const StyleNav = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  transition: var(--transition);

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

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyleMenu = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    li {
      &:not(:last-child) {
        margin-right: 35px;
      }
      .link {
        font-weight: 500;
        font-size: clamp(var(--fz-sm), 4vw, var(--fz-md));
        color: ${({ theme }) => theme.text1};
      }
      .active-link {
        color: ${({ theme }) => theme.highlight};
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
  @media (max-width: 768px) {
    display: block;
  }
`;

export { StyleNav, StyleMenu, StyleHamburgerButton };
