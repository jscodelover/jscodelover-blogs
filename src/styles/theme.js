import mixins from "./mixins";
import aboutImage_dark from "@images/aboutImage_dark.png";
import aboutImage_dark2x from "@images/aboutImage_dark@2x.png";
import aboutImage_light from "@images/aboutImage_light.png";
import aboutImage_light2x from "@images/aboutImage_light@2x.png";

const theme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};

export const darkTheme = {
  body: "#121723",
  bodyBlur: "rgba(18, 23, 35, 0.4)",
  header: "#FFFFFF",
  subHeader: "#FFFFFF",
  text1: "#9CA8BD",
  text2: "#9CA8BD",
  highlight: "#FF7BB8",
  cardBg: "#161C2B",
  headerShadow: "rgba(2, 2, 4, 0.64)",
  cardShadow: "rgba(2, 2, 4, 0.64)",
  photoGradient: "linear-gradient(#1D2436, #2D313C)",
  aboutImage: aboutImage_dark,
  aboutImage2x: aboutImage_dark2x,
};

export const lightTheme = {
  body: "#FFFFFF",
  bodyBlur: "rgba(255, 255, 255, 0.4)",
  header: "#121723",
  subHeader: "#2D3748",
  text1: "#2D3748",
  text2: "#4A5568",
  highlight: "#B9306F",
  cardBg: "#FFFFFF",
  headerShadow: "rgba(0, 0, 0, 0.27)",
  cardShadow: "rgba(213, 213, 213, 0.59)",
  photoGradient: "linear-gradient(#121723, #4A5568)",
  aboutImage: aboutImage_light,
  aboutImage2x: aboutImage_light2x,
};

export default theme;
