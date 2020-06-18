import React from "react";

function Button(props) {
  return (
    <button onClick={props.clickEvent} className="getUser-btn">
      Get Users!
    </button>
  );
}

export default Button;
