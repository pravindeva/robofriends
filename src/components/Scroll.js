import React from "react";
import './scroll.css';
const Scroll = (props) => {
  console.log(props);
  return (
    <div className="scroll"
      style={{
        overflowY: "scroll",
        border: "3px solid black",
        height: "700px",

      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
