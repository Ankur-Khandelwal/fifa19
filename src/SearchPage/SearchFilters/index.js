import React from 'react';
import playerData from '../../Data/data';
import './style.css';

function SearchFilters(props) {
  return (
    <div className="searchFilters">
    <div className="filtersList" style={{display: props.display}}>
    <select
          value = {props.country}
          onChange = {(e) => props.changeCountry(e.currentTarget.value)}
        >
          <option value=""> Select Country</option>
          {
            playerData.map((player) => <option value={player.Nationality}>{player.Nationality}</option>)
          }
        </select>


        <select
          value = {props.position}
          onChange = {(e) => props.changePosition(e.currentTarget.value)}
        >
          <option value=""> Select Position</option>
          {
            playerData.map((player) => <option value={player.Position}>{player.Position}</option>)
          }
        </select>

  
        <select
          value = {props.foot}
          onChange = {(e) => props.changeFoot(e.currentTarget.value)}
        >
          <option value=""> Select Preferred Foot</option>
          <option value="Left"> Left</option>
          <option value="Right"> Right</option>
        </select>

    </div>
    </div>
  );
}

export default SearchFilters;
