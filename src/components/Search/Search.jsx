import React from "react";
import "./Search.css";
function Search({ onFilter, onClick }) {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search..." onChange={onFilter} />
        <br />
        <br />
        <input type="checkbox" onClick={onClick} />{" "}
        <span>Only show products in stock</span>
      </div>
    </>
  );
}

export default Search;
