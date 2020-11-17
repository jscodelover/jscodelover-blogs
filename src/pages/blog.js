import * as React from "react";
import styled from "styled-components";
import { DateRead } from "@components";
import sample from "@images/sample.jpeg";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledBlog = styled.article`
  width: calc(80% - 100px);
  h1 {
    margin: 0;
    font-weight: 800;
    font-size: 48px;
    color: ${({ theme }) => theme.blogHeader};
    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
  }
  h2 {
    margin: 48px 0 24px;
    font-weight: 700;
    font-size: 30px;
    color: ${({ theme }) => theme.highlight};
    @media (max-width: 768px) {
      margin: 52px 0 32px;
      font-size: 24px;
      line-height: 30px;
    }
  }
  .date_read {
    font-size: var(--fz-sm);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.figure`
  margin: 44px 0 70px;
  img {
    max-width: 730px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  figcaption {
    text-align: center;
    font-size: var(--fz-xs);
  }
  @media (max-width: 768px) {
    margin: 20px 0 24px;
  }
`;

const StyledContent = styled.section`
  padding: 0;
  font-size: var(--fz-lg);
  line-height: 32px;
  .language-text {
    background-color: ${({ theme }) => theme.codeTextBg};
    color: ${({ theme }) => theme.codeText};
    padding: 2px 5px;
    margin-left: 3px;
  }
  ol,
  ul {
    padding: 0;
    padding-left: 20px;
    li {
      padding-left: 10px;
      margin-bottom: 12px;
    }
  }
  @media (max-width: 768px) {
    font-size: var(--fz-md);
    line-height: 28px;
  }
`;

const StyledIndex = styled.aside`
  padding: 150px 0;
  margin-left: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Blog() {
  return (
    <StyledWrapper>
      <StyledBlog>
        <h1>How to Dark Mode in React and Tailwind CSS</h1>
        <DateRead className="date_read" date={"Dec 7th, 2018"} time={18} />
        <StyledImage>
          <img src={sample} alt="image alt" />
          <figcaption>Image Caption</figcaption>
        </StyledImage>
        <StyledContent>
          <p>
            Dark mode is the first feature I added in my website. I really
            didn’t know how to do it at first, especially I’m using Tailwind for
            my styling. I’m sure there are plugins available to use but I want
            to implement it myself in order to learn more about React and CSS.
          </p>
          <p>
            Good thing I came across this beautiful article by Josh Comeau: The
            Quest for the Perfect Dark Mode. Two things became clear to me: CSS
            variables and prefers-color-scheme media query.
          </p>
          <p>
            In this post, I will walk you through my process on how to implement
            dark mode in a Gatsby and Tailwind CSS project.
          </p>
          <h2>Adding our CSS variables</h2>
          <p>
            Dark mode is the first feature I added in my website. I really
            didn’t know how to do it at first, especially I’m using Tailwind for
            my styling. I’m sure there are plugins available to use but I want
            to implement it myself in order to learn more about React and CSS.
          </p>
          <p>
            Good thing I came across this beautiful article by Josh Comeau: The
            Quest for the Perfect Dark Mode. Two things became clear to me: CSS
            variables and prefers-color-scheme media query.
          </p>
          <p>
            In this post, I will walk you through my process on how to implement
            dark mode in a Gatsby and Tailwind CSS project.
          </p>
          <h2>Adding our JS variables</h2>
          <p>
            Dark mode is the first feature I added in my website. I really
            didn’t know how to do it at first, especially I’m using Tailwind for
            my styling. I’m sure there are plugins available to use but I want
            to implement it myself in order to learn more about React and CSS.
          </p>
          <p>
            Good thing I came across this beautiful article by Josh Comeau: The
            Quest for the Perfect Dark Mode. Two things became clear to me: CSS
            variables and prefers-color-scheme media query.
          </p>
          <p>
            In this post, I will walk you through my process on how to implement
            dark mode in a Gatsby and Tailwind CSS project.
          </p>
          <ol>
            <li>
              Create a state for the theme and pass the
              <code class="language-text">getInitialTheme</code> function that
              we wrote earlier to get the initial state value.
            </li>
            <li>
              Create another function called
              <code class="language-text">rawSetTheme</code> that will apply the
              <code class="language-text">.light</code> or
              <code class="language-text">.dark</code> class in the root element
              and save the theme in the
              <code class="language-text">localStorage</code>
            </li>
            <li>
              Create a side effect that will call the
              <code class="language-text">rawSetTheme</code> whenever the value
              of <code class="language-text">theme</code> changes.
            </li>
          </ol>
        </StyledContent>
      </StyledBlog>
      <StyledIndex>
        <p>On this page</p>
      </StyledIndex>
    </StyledWrapper>
  );
}

export default Blog;
