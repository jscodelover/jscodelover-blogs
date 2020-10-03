import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  to {
    opacity: 0;
    transform: scale(1);
  }
`;

const cycle_colors = keyframes`
  0% { border-color: ${({ theme }) => theme.highlight} }
  25% { border-color: hsl(90, 100%, 50%); }
  50% { border-color: hsl(180, 100%, 50%); }
  75% { border-color: hsl(270, 100%, 50%); }
  100% { border-color: hsl(360, 100%, 50%); 
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 73%;
  color: ${({ theme }) => theme.header};
  h1 {
    margin: 0 0 15px 0;
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 2vw, var(--fz-md));
  }
  h2 {
    margin: 0 0 9px -4px;
  }
  h3 {
    margin: 0 0 43px -3px;
    font-weight: 600;
    color: var(--light-grey);
    font-size: clamp(28px, 6vw, 50px);
    line-height: 1.1;
  }
  p {
    max-width: 605px;
    font-weight: 500;
    font-size: var(--fz-md);
    line-height: 1.4;
    color: ${({ theme }) => theme.text1};
  }
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const StyledHeroImage = styled.div`
  max-width: 25%;
  width: 25%;
  height: auto;
  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 45px;
  }
`;

const StyledCircle = styled.div`
  max-width: 220px;
  max-height: 220px;
  margin: 0 auto;
  position: relative;

  &::before,
  &::after {
    animation: ${pulse} 2s linear infinite;
    border: 8px solid ${({ theme }) => theme.header};
    border-radius: 50%;
    box-sizing: border-box;
    content: " ";
    height: 140%;
    left: -20%;
    opacity: 0.6;
    position: absolute;
    top: -20%;
    transform: scale(0.714);
    width: 140%;
    z-index: 1;
  }

  &::after {
    animation-delay: 1s;
  }

  &:hover::before,
  &:hover::after {
    animation: ${pulse} 1s linear infinite, ${cycle_colors} 6s linear infinite;
  }

  &:hover::after {
    animation-delay: 0.5s;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
    max-height: 80%;
    width: 200px;
    height: 200px;
  }
`;

export { StyledHeroSection, StyledHeroContent, StyledHeroImage, StyledCircle };
