import * as React from "react";
import { navigate } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Button } from "@components";

const StyleWrapper = styled.section`
  margin: 50vh auto 0;
  transform: translateY(-50%);
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-family: var(--font-mono);
  font-size: 150px;
  margin: 0 0 5px;
  @media (max-width: 480px) {
    font-size: 100px;
  }
`;

const StyledContent = styled.p`
  margin: 0 0 50px;
  font-size: clamp(var(--fz-sm), 2.5vw, var(--fz-lg));
  line-height: 1.35;
`;

function NotFoundPage() {
  function goToHome() {
    navigate("/");
  }
  return (
    <>
      <Helmet title="Page Not Found" />
      <StyleWrapper>
        <StyledTitle>404</StyledTitle>
        <StyledContent>
          Page not found!! The page you’re looking for does not exist.
        </StyledContent>
        <Button onClick={goToHome}>Go Home</Button>
      </StyleWrapper>
    </>
  );
}

export default NotFoundPage;
