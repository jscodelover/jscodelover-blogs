import { css } from "styled-components";

import SFMonoRegularWoff from "@fonts/SFMono/SFMono-Regular.woff";
import SFMonoRegularWoff2 from "@fonts/SFMono/SFMono-Regular.woff2";

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
};

const sfMono = {
  name: "SF Mono",
  normal: sfMonoNormalWeights,
};

const createFontFaces = (family, style = "normal") => {
  let styles = "";

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const sfMonoNormal = createFontFaces(sfMono);

const Fonts = css`
  ${sfMonoNormal}
`;

export default Fonts;
