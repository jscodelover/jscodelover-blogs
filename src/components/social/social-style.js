import styled from "styled-components";

const StyleLinks = styled.ul`
  position: fixed;
  bottom: 0;
  padding-bottom: 90px;
  &:before {
    content: "";
    border-right: 1px solid ${({ theme }) => theme.text2};
    height: 90px;
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleSocial = styled(StyleLinks)`
  left: 50px;
  &:before {
    left: 47.5%;
  }
  @media (max-width: 1024px) {
    left: 25px;
  }
`;

const Media = styled.li`
  margin-bottom: 20px;
  a {
    display: inline-block;
    transition: var(--transition);
    svg {
      width: 18px;
      height: 18px;
    }
    &:hover {
      transform: translateY(-3px);
      svg {
        path {
          fill: ${({ theme }) => theme.highlight};
        }
      }
    }
  }
`;

const StyleEmail = styled(StyleLinks)`
  right: 50px;
  &:before {
    right: 47.5%;
  }
  @media (max-width: 1024px) {
    right: 25px;
  }
  li {
    a {
      position: absolute;
      right: 0;
      top: -29px;
      display: inline-block;
      color: ${({ theme }) => theme.text1};
      font-size: var(--fz-sm);
      font-family: var(--font-mono);
      transform: rotate(90deg);
      transform-origin: right;
      transition: var(--transition);
    }
    &:hover {
      a {
        top: -33px;
        color: ${({ theme }) => theme.highlight};
      }
    }
  }
`;

export { StyleSocial, Media, StyleEmail };
