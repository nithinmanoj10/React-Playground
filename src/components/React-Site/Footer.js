import React from "react";

import Button from "./Button";
import GoToLink from "./GoToLink";

function Footer() {
  return (
    <div className="footer">
      <Button
        button={{
          text: "Get Started",
        }}
      />
      <GoToLink
        link={{
          text: "Take the Tutorial >",
        }}
      />
    </div>
  );
}

export default Footer;
