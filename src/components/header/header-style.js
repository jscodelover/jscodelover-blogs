import styled, { css } from "styled-components";

const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
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

export { StyleNav };
