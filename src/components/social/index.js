import * as React from "react";
import { socialMedia } from "@utils/socialmedia";
import { StyleSocial, Media } from "./social-style";

function Social() {
  return (
    <StyleSocial>
      {socialMedia.map(({ name, url }) => (
        <Media key={name}>{name}</Media>
      ))}
    </StyleSocial>
  );
}

export default Social;
