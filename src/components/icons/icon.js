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
      return <IconCodepen />;
    case "Behance":
      return <IconBehance />;
    case "GitHub":
      return <IconGitHub />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo theme={theme} />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
