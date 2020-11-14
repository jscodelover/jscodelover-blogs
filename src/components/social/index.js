import * as React from "react";
import { ColorThemeContext } from "@context";
import { Icon } from "@components/icons";
import { socialMedia } from "@utils/socialmedia";
import { StyleSocial, Media, StyleEmail } from "./social-style";

function Social() {
  const [theme] = React.useContext(ColorThemeContext);
  return (
    <>
      <StyleSocial>
        {socialMedia.map(({ name, url }) => (
          <Media key={name}>
            <a href={url} target="_blank">
              <Icon name={name} theme={theme} />
            </a>
          </Media>
        ))}
      </StyleSocial>
      <StyleEmail>
        <li>
          <a href="mailto:manisha.4918@gmail.com?subject=Mail from my Site">
            manisha.4918@gmail.com
          </a>
        </li>
      </StyleEmail>
    </>
  );
}

export default Social;
