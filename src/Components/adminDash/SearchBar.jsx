import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-icon-container">
        <FaSearch className="search-icon" style={{ color: "	#869ec8" }} />
      </div>
      <input
        className="search-bar-input"
        type="text"
        placeholder="What are you looking for ?"
      />
    </div>
  );
}
export default SearchBar;
