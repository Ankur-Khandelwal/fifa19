/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './style.css';
import playerData from '../Data/data';
import Logo from './Logo';
import SearchFilters from './SearchFilters';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function SearchPage() {

  const [searchedTerm, setSearchedTerm] = useState('');
  const [resultsDisplay, setResultsDisplay] = useState('none');
  const [filterDisplay, setFilterDisplay] = useState('none');
  const [country, setCountry] = useState('');
  const [foot, setFoot] = useState('');
  const [position, setPosition] = useState('');
  const [results, setResults] = useState([]);

  const toggleFilterDisplay = () => {
    if (filterDisplay === 'none') setFilterDisplay('');
    else if (filterDisplay === '') setFilterDisplay('none');
  }

  const findResults = () => {
    const foundPlayers = playerData.filter((player) => {
      const nameParts = player.Name.split(' '); // Dividing the name into parts to check first, middle as well as last name
      let flag = false;
      let filterFlag = false;
      nameParts.forEach((name)=>{
        if(name.toLowerCase().startsWith(searchedTerm.toLowerCase())) flag = true;
      })
      // eslint-disable-next-line eqeqeq
      if(player.Nationality.startsWith(country) && player.Position.startsWith(position) && player.PreferredFoot.startsWith(foot)) filterFlag = true;
      return filterFlag && flag;
    })
    setResults(foundPlayers);
  }

  useEffect(()=>{
    if(searchedTerm !== '') setResultsDisplay('');
    if(searchedTerm === '' && !foot && !country && !position) setResultsDisplay('none');
    findResults();
  },[searchedTerm, country, foot, position])

  return (
    <div className="searchPage">
      <div className="searchPageGraphics"></div>
      <div className="searchPageMain">
        <Logo/>
        <SearchFilters
          country = {country}
          foot = {foot}
          position = {position}
          changeCountry = {setCountry}
          changeFoot = {setFoot}
          changePosition = {setPosition}
          display = {filterDisplay}
        />
        <SearchBar
          sTerm = {searchedTerm}
          updateTerm = {setSearchedTerm}
          setResultsDisplay = {setResultsDisplay}
          setFiltersDisplay = {toggleFilterDisplay}
        />
        <SearchResults
          results={results}
          display={resultsDisplay}
          setResultsDisplay = {setResultsDisplay}
        />
      </div>
    </div>
  );
}

export default SearchPage;
