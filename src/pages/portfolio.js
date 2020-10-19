import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyleWrapper = styled.div`
  margin: 50vh auto 0;
  transform: translateY(-50%);
  max-width: 700px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-family: var(--font-mono);
  font-size: 80px;
  margin: 0 0 45px;
  @media (max-width: 768px) {
    font-size: 60px;
  }
  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

const StyledContent = styled.p`
  margin: 0;
  font-size: clamp(var(--fz-sm), 2.5vw, var(--fz-lg));
  line-height: 1.35;
`;

function Portfolio() {
  return (
    <>
      <Helmet title="Portfolio" />
      <StyleWrapper>
        <StyledTitle>Coming Soon</StyledTitle>
        <StyledContent>
          I’m currently working on creating something fantastic. Will be here
          soon with my new awesome portfolio.
        </StyledContent>
      </StyleWrapper>
    </>
  );
}

export default Portfolio;
