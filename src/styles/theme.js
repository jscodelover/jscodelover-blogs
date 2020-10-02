import mixins from "./mixins";

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
};

export default theme;
