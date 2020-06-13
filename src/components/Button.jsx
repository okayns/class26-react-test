import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick={props.clickEvent}
        style={{ padding: ".5rem", fontSize: "1.5rem" }}
      >
        Get Users!
      </button>
    </div>
  );
}

export default Button;
