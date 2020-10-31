import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "@components";
import { StyleFooter, StyleCreatorName } from "./footer-style";

function Footer(props) {
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
