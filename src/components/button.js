import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: var(--border-radius);
  border: 1px solid ${({ theme }) => theme.text2};
  color: ${({ theme }) => theme.text2};
  padding: 14px 25px;
  font-size: var(--fz-md);
  font-weight: 500;
  &:hover {
    background-color: ${({ theme }) => theme.text2};
    color: ${({ theme }) => theme.body};
  }
`;

export default StyledButton;
