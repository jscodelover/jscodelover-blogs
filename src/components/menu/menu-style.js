import styled from "styled-components";

const StyleMenu = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      &:not(:last-child) {
        margin-right: 35px;
      }
      .link {
        font-weight: 500;
        font-size: var(--fz-md);
        color: ${({ theme }) => theme.text1};
      }
      .active-link {
        color: ${({ theme }) => theme.highlight};
      }
      .themeBtn {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;

export { StyleMenu };
