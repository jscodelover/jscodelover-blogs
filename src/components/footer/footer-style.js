import styled from "styled-components";

const StyleFooter = styled.section`
  text-align: center;
  h2 {
    margin: 0;
    font-size: clamp(37px, 5vw, 60px);
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }
  p {
    max-width: 707px;
    font-size: clamp(var(--fz-md), 3vw, var(--fz-lg));
    margin: 10px auto 50px;
  }
`;

const StyleCreatorName = styled.section`
  text-align: center;
  margin-bottom: 20px;
  a {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: ${({ theme }) => theme.text1};
    &:hover,
    &:active {
      color: ${({ theme }) => theme.highlight};
    }
  }
`;

export { StyleFooter, StyleCreatorName };
