import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
`;

const StyledArticle = styled.article`
  max-width: 640px;
`;

const StyledInfoBlock = styled.div`
  margin-bottom: 45px;
  h3 {
    margin: 0 0 30px;
    font-size: var(--fz-xxl);
    color: ${({ theme }) => theme.highlight};
  }
  p {
    color: ${({ theme }) => theme.text2};
    font-size: var(--fz-md);
    line-height: 28px;
  }
`;

const StyledPlaceHolderImage = styled.div`
  max-width: 550px;
  width: calc(100% - 670px);
  margin-top: 300px;
  margin-left: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ theme }) => theme.aboutImage});

  @media (-webkit-min-device-pixel-ratio: 1.5),
    (min--moz-device-pixel-ratio: 1.5),
    (-o-min-device-pixel-ratio: 3/2),
    (min-resolution: 1.5dppx) {
    background-image: url(${({ theme }) => theme.aboutImage2x});
  }

  @media (max-width: 1300px) {
    visibility: hidden;
  }
`;

function About() {
  return (
    <>
      <Helmet title="About" />
      <StyledAbout>
        <StyledArticle>
          <StyledInfoBlock>
            <h3>About Me</h3>
            <p>
              Hi! I’m <strong>Manisha Basra(@jscodelover)</strong>, a software
              engineer based in Delhi, India. Primarily interested in Front-end
              Development and UI designing.
            </p>
            <p>
              I enjoy creating things that exist online, whether it is a
              website, application, or anything in between. My goal is to build
              a performant and robust product that look great, feel fantastic,
              and function correctly and provides the user with a great
              experience. And been engineering software for almost 2 years now,
              JavaScript is something that I have worked with the most and feel
              most comfortable with.
            </p>
            <p>
              Apart from this, I enjoy writing tech blogs and also helping every
              tech beginner, I come across.
            </p>
          </StyledInfoBlock>
          <StyledInfoBlock>
            <h3>Why make this website?</h3>
            <p>
              I made this website to learn what actually goes into web
              development. From planning, design, development, launch, and
              maintenance. For sure there are other things that I have yet to
              encounter, and I’m ready to learn them.
            </p>
            <p>
              This also serves a motivation for me to continue making projects
              because now I finally have a place to showcase them.
            </p>
          </StyledInfoBlock>
          <StyledInfoBlock>
            <h3>Apart from coding?</h3>
            <p>
              When I’m not coding, I’m always busy in watch watching movies, TV
              series. I also love listening to awesome music and reading
              fictional novels.
            </p>
          </StyledInfoBlock>
        </StyledArticle>
        <StyledPlaceHolderImage />
      </StyledAbout>
    </>
  );
}

export default About;
