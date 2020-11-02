import styled from "styled-components";

const StyleSocial = styled.ul`
  position: fixed;
  bottom: 0;
  left: 50px;
  padding-bottom: 90px;
  &:before {
    content: "";
    border: 1px solid ${({ theme }) => theme.text2};
    height: 90px;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
  @media (max-width: 1024px) {
    left: 25px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Media = styled.li`
  margin-bottom: 20px;
`;

export { StyleSocial, Media };
