import React from "react";
import styled from "styled-components";
import { DateRead } from "@components";
import sampleImg from "@images/sample.jpeg";

const StyleWrapper = styled.div`
  width: 85%;
  @media (max-width: 1198px) {
    width: 100%;
  }
`;

const StyleList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
`;

const StyleImage = styled.img`
  width: 150px;
  height: 140px;
  object-fit: cover;
  object-position: center;
  border-radius: 9px;
  margin-right: 39px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleContent = styled.div`
  h3 {
    color: ${({ theme }) => theme.subHeader};
    font-size: var(--fz-xxl);
    font-weight: 600;
    margin: 0 0 4px;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: var(--fz-xl);
    }
  }
  div {
    font-size: 12px;
  }
  p {
    margin: 15px 0 0;
    height: 52px;
    overflow: hidden;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

function List(props) {
  return (
    <StyleWrapper>
      <StyleList>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            Hey there, in this blog we are going to learn about Git and Github.
            As a developer, you might have come across the terms Git and Github
            but do you understand why do you need or why you are using these?
            Let’s dig a little deeper to understand have come across the terms
            Git and Github but do you understand why do you need or why you are
            using these? Let’s dig a little deeper to understand.As a developer,
            you might have come across the terms Git and Github but do you
            understand why do you need or why you are using these? Let’s dig a
            little deeper to understand have come across the terms Git and
            Github but do you understand why do you need or why you are using
            these? Let’s dig a little deeper to understand
          </p>
        </StyleContent>
        <a href="#" />
      </StyleList>
      <StyleList>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            Hey there, in this blog we are going to learn about Git and Github.
            As a developer, you might have come across the terms Git and Github
            but do you understand why do you need or why you are using these?
            Let’s dig a little deeper to understand have come across the terms
            Git and Github but do you understand why do you need or why you are
            using these? Let’s dig a little deeper to understand.As a developer,
            you might have come across the terms Git and Github but do you
            understand why do you need or why you are using these? Let’s dig a
            little deeper to understand have come across the terms Git and
            Github but do you understand why do you need or why you are using
            these? Let’s dig a little deeper to understand
          </p>
        </StyleContent>
        <a href="#" />
      </StyleList>
      <StyleList>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            Hey there, in this blog we are going to learn about Git and Github.
            As a developer, you might have come across the terms Git and Github
            but do you understand why do you need or why you are using these?
            Let’s dig a little deeper to understand have come across the terms
            Git and Github but do you understand why do you need or why you are
            using these? Let’s dig a little deeper to understand.As a developer,
            you might have come across the terms Git and Github but do you
            understand why do you need or why you are using these? Let’s dig a
            little deeper to understand have come across the terms Git and
            Github but do you understand why do you need or why you are using
            these? Let’s dig a little deeper to understand
          </p>
        </StyleContent>
        <a href="#" />
      </StyleList>
    </StyleWrapper>
  );
}

export default List;
