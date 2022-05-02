import React from "react";
import "./searchBox.css";

const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <div className="search-box-container">
      <input type="search" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default SearchBox;
