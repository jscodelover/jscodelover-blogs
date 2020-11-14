import * as React from "react";

const IconCodepen = ({ theme }) => {
  const fill = theme === "light" ? "#2D3748" : "#9ca8bd";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      role="img"
    >
      <title>Codepen</title>
      <g id="comp_x5F_59-codepen" transform="translate(-26.001 -26.002)">
        <path
          id="Path_5"
          data-name="Path 5"
          d="M47.584,32.864l-10.055-6.7a.955.955,0,0,0-1.056,0l-10.055,6.7A.961.961,0,0,0,26,33.65v6.7a.961.961,0,0,0,.417.786l10.055,6.7a.955.955,0,0,0,1.056,0l10.055-6.7A.961.961,0,0,0,48,40.353v-6.7A.961.961,0,0,0,47.584,32.864Zm-9.637-4.15,7.4,4.935-3.3,2.21-4.1-2.738Zm-1.891,0v4.407l-4.1,2.738-3.3-2.21Zm-8.164,6.7L30.261,37l-2.369,1.584Zm8.164,9.871-7.4-4.935,3.3-2.21,4.1,2.738v4.407ZM37,39.236,33.662,37,37,34.767,40.34,37Zm.945,6.053V40.881l4.1-2.738,3.3,2.21Zm8.164-6.7L43.741,37l2.369-1.584Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default IconCodepen;
