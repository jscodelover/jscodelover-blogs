import styled from "styled-components";

const StyleView = styled.ul`
  display: flex;
  margin-top: 100px;
  justify-content: flex-end;
  li {
    &:not(:last-of-type) {
      margin-right: 17px;
    }
    .view-type {
      svg {
        g {
          path,
          rect {
            fill: ${({ theme }) => theme.text1};
          }
        }
      }
    }
    &[data-selected="true"] {
      .view-type {
        svg {
          g {
            path,
            rect {
              fill: ${({ theme }) => theme.highlight};
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export { StyleView };
