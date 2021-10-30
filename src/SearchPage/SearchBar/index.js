import React from 'react';
import './style.css';

function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchInput"
        placeholder="Search player"
        value={props.sTerm}
        onChange = {(e) => props.updateTerm(e.target.value)}
      />
      <button className="searchButton" onClick={()=>{props.setResultsDisplay(true)}}>Search</button>
      <img src="https://i.ibb.co/vQjphCy/filter.png" alt="filter" onClick={() => props.setFiltersDisplay()}/>
    </div>
  );
}

export default SearchBar;
