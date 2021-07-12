import React from "react";

function GoToLink(props) {
  return (
    <a href="javascript:void(0)" className="go-to-link">
      {props.link.text}
    </a>
  );
}

export default GoToLink;
