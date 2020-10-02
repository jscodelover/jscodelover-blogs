import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${Fonts};

  :root {
    --light-blue: #2D3748;
    --dark-grey: #4A5568;
    --dark-pink: #B9306F;
    --card-blue: #161C2B;
    --card-blue-shadow: rgba(2, 2, 4, 0.64);
    --card-grey-shadow: rgba(213, 213, 213, 0.59);
    --white: #ffffff;
    --dark-blue: #121723;
    --light-pink: #FF7BB8;
    --light-grey: #9CA8BD;


    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;
    --fz-heading: 32px;

    --font-inter: Inter, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --border-radius: 4px;
    --nav-height: 85px;
    --sidebar-width: 350px;

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }    

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-inter);
    font-size: var(--fz-md);
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text2};
    transition: var(--transition);
  }  

  button{
    padding: 0;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
    &:active, &:visited{
      color: inherit;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  section, article {
    margin: 0px auto;
    padding: 150px 0px;
    max-width: 1000px;
  }

  :focus{
    outline-color: transparent;
    outline-style: initial;
  }

.blur{
  overflow: hidden;
  #content > *{
    filter: blur(5px) brightness(0.7);
    transition: var(--transition);
    pointer-events: none;
    user-select: none;
  }
}

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  line,circle{
    transition: var(--transition)
  }

`;

export default GlobalStyle;
