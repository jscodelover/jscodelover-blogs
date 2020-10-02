import * as React from "react";

const IconTheme = ({ theme }) => {
  if (theme === "light")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        role="img"
      >
        <defs>
          <clipPath id="clip-path">
            <rect x="12" width="13" height="25" fill="none" />
          </clipPath>
        </defs>
        <g
          id="Group_23"
          data-name="Group 23"
          transform="translate(-1623 -55.5)"
        >
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="12"
            cy="12"
            r="12"
            transform="translate(1623.5 56)"
            fill="#fff"
            stroke="#4a5568"
            strokeWidth="1"
          />
          <g
            id="Scroll_Group_1"
            data-name="Scroll Group 1"
            transform="translate(1623 55.5)"
            clip-path="url(#clip-path)"
            style={{ isolation: "isolate" }}
          >
            <g
              id="Group_1"
              data-name="Group 1"
              transform="translate(-1663 -109)"
            >
              <circle
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="12"
                cy="12"
                r="12"
                transform="translate(1663.5 109.5)"
                fill="#2d3748"
                stroke="#2d3748"
                strokeWidth="1"
              />
              <line
                id="Line_1"
                data-name="Line 1"
                y2="23"
                transform="translate(1675.5 109.5)"
                fill="#fff"
                stroke="#2d3748"
                strokeWidth="1"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      role="img"
    >
      <defs>
        <clipPath id="clip-path">
          <rect x="12" width="13" height="25" fill="none" />
        </clipPath>
      </defs>
      <g id="Group_23" data-name="Group 23" transform="translate(-1623 -55.5)">
        <path
          id="Path_176"
          data-name="Path 176"
          d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"
          transform="translate(1623.5 56)"
          fill="#121723"
          stroke="#9ca8bd"
          strokeWidth="1"
        />
        <g
          id="Scroll_Group_1"
          data-name="Scroll Group 1"
          transform="translate(1623 55.5)"
          clip-path="url(#clip-path)"
          style={{ isolation: "isolate" }}
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-1663 -109)">
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="12"
              cy="12"
              r="12"
              transform="translate(1663.5 109.5)"
              fill="#9ca8bd"
              stroke="#9ca8bd"
              strokeWidth="1"
            />
            <line
              id="Line_1"
              data-name="Line 1"
              y2="23"
              transform="translate(1675.5 109.5)"
              fill="#fff"
              stroke="#9ca8bd"
              strokeWidth="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconTheme;
