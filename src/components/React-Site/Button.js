import React from "react";

function Button(props) {
  return (
    <a href="javascript:void(0)" className="button">
      {props.button.text}
    </a>
  );
}

export default Button;
