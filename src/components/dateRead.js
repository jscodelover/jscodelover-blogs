import React from "react";
import styled from "styled-components";
import lunch from "@images/lunch.svg";
import coffee from "@images/coffee.svg";

const StyleDateRate = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fz-xxs);
`;

const StyleSeparator = styled.div`
  width: 3px;
  height: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text1};
`;

const StyleDate = styled.div``;
const StyleTime = styled.div``;

const StyleIcon = styled.img`
  margin-left: 4px;
  width: 12px;
`;

function DateRead({ date, time }) {
  return (
    <StyleDateRate>
      <StyleDate>{date}</StyleDate>
      <StyleSeparator />
      <StyleTime>{`${time} min read`}</StyleTime>
      <StyleIcon
        src={time > 15 ? lunch : coffee}
        alt={time > 15 ? lunch : coffee}
        role="img"
      />
    </StyleDateRate>
  );
}

export default DateRead;
