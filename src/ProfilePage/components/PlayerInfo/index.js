import React from 'react';
import './style.css';

function PlayerInfo(props) {

  const skillRating = () => {
    let sr = '';
    for(let i=0; i<props.skillRating; i++) {
      sr = sr + '⭐';
    }
    return sr;
  }

  return (
    <div className="playerInfo">
      <div className="overall">
        <div className="greenInfo">Overall <span>{props.overall}</span> </div> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="greenInfo">Value <span>{props.value}</span> </div>  
      </div>
      <div className="data">
        <p>Age <span>{props.age}</span> </p>
        <p>Height <span>{props.height}</span> </p>
        <p>Weight <span>{props.weight}</span> </p>
        <p>Preferred Foot <span>{props.prefFoot}</span> </p>
        <p>Position <span>{props.position}</span> </p>
        <p>Jersey Number <span>{props.jesNum}</span> </p>
        <p>Joined<span>{props.joined}</span> </p>
        <p>Contract Valid Until<span>{props.contract}</span> </p>
        <p>Wage<span>{props.wage}</span> </p>
        <p>Skill Moves <span>{skillRating()}</span> </p>
        <p>Work Rate (Attak - Defense) <span>{props.workRate}</span> </p>
      </div>
    </div>
  )
}

export default PlayerInfo
