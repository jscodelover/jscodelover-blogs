import * as React from "react";

const IconCross = ({ theme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27.088"
    height="27.088"
    viewBox="0 0 27.088 27.088"
  >
    <g
      id="Group_163"
      data-name="Group 163"
      transform="translate(-300.954 -22.454)"
    >
      <line
        id="Line_6"
        data-name="Line 6"
        y2="34.309"
        transform="translate(326.628 23.868) rotate(45)"
        fill="none"
        stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <line
        id="Line_7"
        data-name="Line 7"
        y2="34.309"
        transform="translate(302.368 23.868) rotate(-45)"
        fill="none"
        stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default IconCross;
