import React from "react";
import PropTypes from "prop-types";
import {
  IconCodepen,
  IconGitHub,
  IconLinkedin,
  IconBehance,
  IconLogo,
  IconTwitter,
  IconTheme,
} from "@components/icons";

const Icon = ({ name, theme }) => {
  switch (name) {
    case "Theme":
      return <IconTheme theme={theme} />;
    case "Codepen":
      return <IconCodepen theme={theme} />;
    case "Behance":
      return <IconBehance theme={theme} />;
    case "GitHub":
      return <IconGitHub theme={theme} />;
    case "Linkedin":
      return <IconLinkedin theme={theme} />;
    case "Logo":
      return <IconLogo theme={theme} />;
    case "Twitter":
      return <IconTwitter theme={theme} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
