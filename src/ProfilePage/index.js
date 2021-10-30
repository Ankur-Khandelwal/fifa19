import React from 'react';
import './style.css';
import Header from './components/Header';
import RadarChart from './components/RadarChart';
import PlayerInfo from './components/PlayerInfo';
import playerData from '../Data/data';

function ProfilePage({match}) {

  const {
    params: { playerName },
  } = match;

  const playerNameParts = playerName.split('-');
  let tempName = '';
  playerNameParts.forEach((part) => tempName = tempName + ' ' + part);
  const actualName = tempName.substring(1);

  const player = playerData.find((plyr)=>plyr.Name === actualName);

  const calculateSkillRating = () => {
      const skillRatingSum = player.HeadingAccuracy + player.Finishing + player.Crossing + player.ShortPassing + player.Volleys;
      const skillRating = Math.round(skillRatingSum / 100);
      return skillRating;
  }

  return (
    <div className="profilePage">
      <Header
        name = {player.Name}
      />
      <div className="playerDetails">
      <RadarChart 
        playerStats = {[
          player.HeadingAccuracy, 
          player.Finishing,
          player.Crossing,
          player.ShortPassing,
          player.Volleys,
          player.Overall 
        ]} 
      />
      <div className="verticalLine"></div>
      <PlayerInfo
        overall = {player.Overall}
        value = {player.Value}
        age = {player.Age}
        height = {player.Height}
        weight = {player.Weight}
        prefFoot = {player.PreferredFoot}
        position = {player.Position}
        jesNum = {player.JerseyNumber}
        workRate = {player.WorkRate}
        joined = {player.Joined}
        contract = {player.ContractValidUntil}
        wage = {player.Wage}
        skillRating = {calculateSkillRating()}
      />
      </div>
      <img src="https://i.ibb.co/M861j1s/art1.png" alt="art" className="artImage1"/>
      <img src="https://i.ibb.co/M861j1s/art1.png" alt="art" className="artImage2"/>
      <img src="https://i.ibb.co/M861j1s/art1.png" alt="art" className="artImage3"/>
      <img src="https://i.ibb.co/M861j1s/art1.png" alt="art" className="artImage4"/>
    </div>
  )
}

export default ProfilePage;
