import React from "react";

function button(props) {
  return (
    <a href="javascript:void(0)" className="button" onClick={props.decrement}>
      {props.text}
    </a>
  );
}

export default button;
