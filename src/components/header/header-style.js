import styled from "styled-components";

const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  height: 85px;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.cardShadow};
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export { StyleNav };
