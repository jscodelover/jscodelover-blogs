import styled from "styled-components";

const StyleContent = styled.div.attrs(props => ({
  id: `content`,
}))`
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  padding: 0 150px;
  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

export { StyleContent };
