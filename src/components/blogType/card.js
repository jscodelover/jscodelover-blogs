import React from "react";
import styled from "styled-components";
import { DateRead } from "@components";
import sampleImg from "@images/sample.jpeg";

const StyleWrapper = styled.div`
  display: grid;
  grid-gap: 80px 45px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  @media (max-width: 399px) {
    grid-template-columns: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  max-width: 350px;
  min-height: 381px;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 9px;
  box-shadow: 0 0 30px ${({ theme }) => theme.cardShadow};
  a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  &:hover {
    /* transform: rotateX(-4deg) rotateY(0deg) rotateZ(-2deg); */
    h3 {
      color: ${({ theme }) => theme.highlight};
    }
  }
`;

const StyleImage = styled.img`
  width: 100%;
  max-width: inherit;
  height: 240px;
  border-radius: 9px 9px 0 0;
`;

const StyleContent = styled.div`
  padding: 16px 20px;
  h3 {
    color: ${({ theme }) => theme.subHeader};
    font-size: var(--fz-xl);
    font-weight: 600;
    margin: 0 0 4px;
    cursor: pointer;
  }
  div {
    font-size: 12px;
  }
  p {
    margin: 12px 0 0;
    max-height: 30px;
    overflow: hidden;
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

function CardComponent(props) {
  return (
    <StyleWrapper>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={2} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
      <Card>
        <StyleImage src={sampleImg} alt={sampleImg} />
        <StyleContent>
          <h3>Things About Git and Github You Need to Know as Developer</h3>
          <DateRead date={"Dec 7th, 2018"} time={18} />
          <p>
            In this article I’m going to present to you a way of handling your
            API errors once and for all in a In this article I’m going to
            present to you a way of handling your API errors once and for all in
          </p>
        </StyleContent>
        <a href="#" />
      </Card>
    </StyleWrapper>
  );
}

export default CardComponent;
