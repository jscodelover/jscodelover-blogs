import * as React from "react";
import PropTypes from "prop-types";
import { ColorThemeContext } from "@context";
import { Button } from "@components";
import { Icon } from "@components/icons";
import { socialMedia } from "@utils/socialmedia";
import {
  StyleFooter,
  StyleCreatorName,
  StyleSocial,
  Media,
} from "./footer-style";

function Footer(props) {
  const [theme] = React.useContext(ColorThemeContext);
  const {
    location: { pathname },
  } = props;
  if (["/", "/about"].includes(pathname))
    return (
      <>
        <StyleFooter>
          <h2>
            Get In Touch{" "}
            <span role="img" aria-label="hand waving">
              👋
            </span>
          </h2>
          <p>
            When you have came this far, feel free to shoot me an email to
            discuss any idea, project or just for a good chat! I’ll try my best
            to get back to you!
          </p>
          <Button as="a" href="mailto:manisha.4919@gmail.com">
            Say Hello
          </Button>
        </StyleFooter>
        <StyleCreatorName>
          <StyleSocial>
            {socialMedia.map(({ name, url }) => (
              <Media key={name}>
                <a href={url} target="_blank">
                  <Icon name={name} theme={theme} />
                </a>
              </Media>
            ))}
          </StyleSocial>
          <a
            href="https://github.com/jscodelover/jscodelover-blogs"
            target="_blank"
            rel="noreferrer"
          >
            Designed & Built by Manisha Basra
          </a>
        </StyleCreatorName>
      </>
    );
  return null;
}

export default Footer;
