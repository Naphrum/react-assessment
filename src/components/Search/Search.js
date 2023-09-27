import React, { useState, useEffect } from 'react';
import './search.css'
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1017')
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='search-wrapper'>
      <input
        type="text"
        placeholder="Search for a Pokemon..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div className=''>
        <SearchResults searchQuery={searchQuery} setSearchQuery={setSearchQuery} pokemonList={pokemonList}/>
      </div>
    </div>
  );
};

export default Search;
