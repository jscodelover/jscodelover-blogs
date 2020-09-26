import styled from "styled-components";

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
`;

export { StyleMenu };
