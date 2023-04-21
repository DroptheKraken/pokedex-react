import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    if (searchQuery) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
      if (!res.ok) {
        alert(`Failed to fetch Pokemon data`);
        setSearchQuery("");
        return;
      }
      const data = await res.json();
      const filteredData = data.results.filter(pokemon => pokemon.name.includes(searchQuery.toLowerCase()));
      if (filteredData.length === 0) {
        alert(`No Pokemon found matching "${searchQuery}"`);
        setSearchQuery("");
        return;
      }
      const pokemonDetails = await Promise.all(filteredData.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      }));
      setPokemonData(pokemonDetails);
      setSearchQuery("");
    }
  };

  return (
    <div className="search-container">
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter a Pokemon name" />
      <button onClick={handleSearch}>Search</button>
      {pokemonData && (
        <div className="search-result">
          {pokemonData.map(pokemon => (
            <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} type={pokemon.types[0].type.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonSearchBar;
