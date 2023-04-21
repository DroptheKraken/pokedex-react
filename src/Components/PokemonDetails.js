import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../PokemonDetails.css';

 const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) {
    return null;
  }

  const { name, id, abilities, sprites } = pokemon;

  return (
    <div className="container">
      <div className="details">
        <h1 className="header">{name}</h1>
        <img className="image" src={sprites.front_default} alt={name} />
        <div className="info">
          <label>ID:</label> {id}
        </div>
        <div className="abilities">
          <label>Abilities:</label>
          <ul>
            {abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
};
export default PokemonDetails;
