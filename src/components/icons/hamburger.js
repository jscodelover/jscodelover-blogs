import * as React from "react";

const IconHamBurger = ({ theme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="22"
    viewBox="0 0 40 22"
  >
    <g id="Group_3" data-name="Group 3" transform="translate(-148.5 -236.5)">
      <line
        id="Line_2"
        data-name="Line 2"
        x2="23"
        transform="translate(149.5 237.5)"
        fill="none"
        stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <line
        id="Line_3"
        data-name="Line 3"
        x2="36"
        transform="translate(149.5 247.5)"
        fill="none"
        stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <line
        id="Line_4"
        data-name="Line 4"
        x1="23"
        transform="translate(164.5 257.5)"
        fill="none"
        stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

export default IconHamBurger;
