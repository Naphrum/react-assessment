import axios from "axios";
import "./PokemonDetails.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    types: [],
    sprite: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(pokemonUrl);
        setPokemon({
          id: response.data.id,
          name: response.data.name,
          types: response.data.types,
          sprite: response.data.sprites.front_default,
        });
      } catch (error) {
        console.log('catch error')
        navigate("/notfound");
      }
    };
    fetchPokemon();
  }, [pokemonUrl, navigate]);

  return (
    <div>
      {pokemon.name ?  <div className="pokemon-card">
      <img src={pokemon.sprite} alt={pokemon.name} />
      <h1>Name: {capitalize(pokemon.name)}</h1>
      <div>
        Type:
        {pokemon.types.map((type) => (
          <div key={capitalize(type.type.name)}>
            {capitalize(type.type.name)}
          </div>
        ))}
      </div>
    </div> : <div></div>}
    </div>
    
  );
};

export default PokemonDetails;
