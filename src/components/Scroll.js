import React from "react";
<<<<<<< HEAD
import "./scroll.css";
const Scroll = (props) => {
  console.log(props);
  return (
    <div
      className="scroll"
=======
import './scroll.css';
const Scroll = (props) => {
  console.log(props);
  return (
    <div className="scroll"
>>>>>>> 56beeefc039653b961bbddb185b1659ef11231fe
      style={{
        overflowY: "scroll",
        border: "3px solid black",
        height: "700px",
<<<<<<< HEAD
=======

>>>>>>> 56beeefc039653b961bbddb185b1659ef11231fe
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
