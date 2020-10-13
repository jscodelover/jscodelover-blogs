import * as React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledHeroSection,
  StyledHeroContent,
  StyledHeroImage,
  StyledCircle,
} from "./heroSection-style";

function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <h1>Hey!!, I'm</h1>
        <h2 className="big-heading">Manisha Basra.</h2>
        <h3>I stand on a sweet spot where design and code intersects.</h3>
        <p>
          I’m a Frontend Engineer from India specializing in building and
          occasionally designing exceptional websites. I{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          all things about web. I am super passionate about learning and
          building stuff.
        </p>
      </StyledHeroContent>
      <StyledHeroImage>
        <StyledCircle>
          <Img
            style={{ borderRadius: "50%" }}
            fluid={data.myImage.childImageSharp.fluid}
            alt="Avatar"
          />
        </StyledCircle>
      </StyledHeroImage>
    </StyledHeroSection>
  );
}

export default HeroSection;
