import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({id, name, image, types}) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemonTypes(data.types.map(type => type.type.name));
    }
    fetchPokemon();
  }, [name]);

  const style = `card-container ${pokemonTypes[0]}`;

  return (
    <div className={style}>
      <Link to={`pokemon/${name}`} className="link">
        <div className="number">
          <small>#{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h2>{name}</h2>
          <p>{pokemonTypes.join(", ")}</p>
        </div>
      </Link>
    </div>
  );
}

export default PokemonCard;
