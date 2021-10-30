import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function SearchResults(props) {

  const generateProfileUrl = (player) => {
    const nameParts = player.Name.split(' ');
    let nameSlug = '';
    nameParts.forEach((part)=>nameSlug = nameSlug+'-'+part);
    return `/playerprofile/${nameSlug.substring(1)}`;
  }

  return (
    <div className="searchResultsParent" style={{display: props.display}}>
      <div className="searchResultsArt"></div>
      <div className="searchResults">
        <span id="close" onClick={()=>props.setResultsDisplay('none')}>x</span>
        {
          props.results.map((player)=>{
            return (
              <div className="foundPlayerBox">
                <div className="foundPlayerName">
                  <Link to = {generateProfileUrl(player)}><p className="playerName">{player.Name}</p></Link>
                </div>
                <div className="foundPlayerDetails">
                  <div className="posFoot">
                    <p className="playerPosition">Position: <span>{player.Position}</span></p>
                    <p className="playerFoot">Foot: <span>{player.PreferredFoot}</span></p>
                  </div>
                  <p className="playerCountry">Country: <span>{player.Nationality}</span></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default SearchResults;
