import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./searchResults.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const SearchResults = ({ searchQuery, setSearchQuery, pokemonList }) => {
  const [searchResults, setSearchResults] = useState([]);

  const renderSearchResults = () => {
    if (searchQuery) {
      return searchResults.map((pokemon) => {
        const pokemonId = pokemon.url.split('/')
        console.log(pokemonId)
        console.log(pokemonId.length - 1)
        console.log(pokemonId[pokemonId.length - 1])
        return (
          <Link
            to={`/${pokemonId[pokemonId.length - 2]}`}
            key={pokemon.name}
            className="search-result"
            onClick={handleClick}
          >
            {capitalize(pokemon.name)}
          </Link>
        );
      });
    }
  };

  const handleClick = () => {
    setSearchQuery('')
    setSearchResults([])
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery, pokemonList]);

  return (
    <div className="search-results-wrapper">
      <div className="search-results" to="/">{renderSearchResults()}</div>
      <Routes>
        <Route path="/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
};

export default SearchResults;
