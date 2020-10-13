import * as React from "react";
import { Button } from "@components";
import { StyleFooter, StyleCreatorName } from "./footer-style";

function Footer() {
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
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          please don't hesitate to contact me, I’ll try my best to get back to
          you!
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
}

export default Footer;
