import React, {useState} from 'react';
import {useEffect} from 'react';

const PokemonNames = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
            .then((response) => response.json())
            .then((response) => setPokemon(response.results));
    }, []);

    return (
        <div>
            {pokemon.length > 0 && pokemon.map((poke, index) => {
                return <li key={index}>{poke.name}</li>
            })}
        </div>
    )
}

export default PokemonNames;