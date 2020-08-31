import React from "react";
import "./searchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2 display">
      <input
        className="pa3 ba b--green bg-lightest-blue "
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};
export default SearchBox;
