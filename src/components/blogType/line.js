import React from "react";
import styled from "styled-components";
import { DateRead } from "@components";

const StyleWrapper = styled.div`
  width: 75%;
  @media (max-width: 1198px) {
    width: 100%;
  }
`;

const StyleLine = styled.div`
  position: relative;
  margin-bottom: 80px;
  h3 {
    color: ${({ theme }) => theme.subHeader};
    font-size: 26px;
    font-weight: 600;
    margin: 0 0 4px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  div {
    font-size: 12px;
  }
  p {
    margin: 6px 0 0;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 768px) {
      max-height: 35px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
`;

function List(props) {
  return (
    <StyleWrapper>
      <StyleLine>
        <h3>Things About Git and Github You Need to Know as Developer</h3>
        <DateRead date={"Dec 7th, 2018"} time={18} />
        <p>
          Hey there, in this blog we are going to learn about Git and Github. As
          a developer, you might have come across the terms Git and Github but
          do you understand why do you need or why you are using these? Let’s
          dig a little deeper to understand have come across the terms Git and
          Github but do you understand why do you need or why you are using
          these? Let’s dig a little deeper to understand…
        </p>
        <a href="#" />
      </StyleLine>
      <StyleLine>
        <h3>Things About Git and Github You Need to Know as Developer</h3>
        <DateRead date={"Dec 7th, 2018"} time={18} />
        <p>
          Hey there, in this blog we are going to learn about Git and Github. As
          a developer, you might have come across the terms Git and Github but
          do you understand why do you need or why you are using these? Let’s
          dig a little deeper to understand have come across the terms Git and
          Github but do you understand why do you need or why you are using
          these? Let’s dig a little deeper to understand…
        </p>
        <a href="#" />
      </StyleLine>
      <StyleLine>
        <h3>Things About Git and Github You Need to Know as Developer</h3>
        <DateRead date={"Dec 7th, 2018"} time={5} />
        <p>
          Hey there, in this blog we are going to learn about Git and Github. As
          a developer, you might have come across the terms Git and Github but
          do you understand why do you need or why you are using these? Let’s
          dig a little deeper to understand have come across the terms Git and
          Github but do you understand why do you need or why you are using
          these? Let’s dig a little deeper to understand…
        </p>
        <a href="#" />
      </StyleLine>
      <StyleLine>
        <h3>Things About Git and Github You Need to Know as Developer</h3>
        <DateRead date={"Dec 7th, 2018"} time={10} />
        <p>
          Hey there, in this blog we are going to learn about Git and Github. As
          a developer, you might have come across the terms Git and Github but
          do you understand why do you need or why you are using these? Let’s
          dig a little deeper to understand have come across the terms Git and
          Github but do you understand why do you need or why you are using
          these? Let’s dig a little deeper to understand…
        </p>
        <a href="#" />
      </StyleLine>
    </StyleWrapper>
  );
}

export default List;
