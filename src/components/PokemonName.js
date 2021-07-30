import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PokemonName = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(response=>{setPokemon(response.data.results)})
  }, []);

  return (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((poke, index) => {
          return <li key={index}>{poke.name}</li>;
        })}
    </div>
  );
};

export default PokemonName;
