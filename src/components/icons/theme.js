import * as React from "react";

const IconTheme = ({ theme, device }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.087"
      height="23"
      viewBox="0 0 23.087 23"
    >
      <defs>
        <clipPath id={`clip-path${device}`}>
          <rect x="11" width="12" height="23" fill="none" />
        </clipPath>
      </defs>
      <g id="Group_23" data-name="Group 23" transform="translate(-1623 -55.5)">
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="11"
          cy="11"
          r="11"
          transform="translate(1623.5 56)"
          fill={theme === "light" ? "#fff" : "#121723"}
          stroke={theme === "light" ? "#2D3748" : "#9ca8bd"}
          strokeWidth="1"
        />
        <g
          id="Scroll_Group_3"
          data-name="Scroll Group 3"
          transform="translate(1623.087 55.5)"
          clip-path={`url(#clip-path${device})`}
          style={{ isolation: "isolate" }}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-1663 -109)">
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="11"
              cy="11"
              r="11"
              transform="translate(1663.5 109.5)"
              fill={theme === "light" ? "#2d3748" : "#9ca8bd"}
              stroke={theme === "light" ? "#2d3748" : "#9ca8bd"}
              strokeWidth="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconTheme;
