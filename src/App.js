import React, { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";
import PokemonSearchBar from "./Components/PokemonSearchBar";
<link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"></link>

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [prevUrl, setPrevUrl] = useState('');

  const getAllPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setNextUrl(data.next);
    setPrevUrl(data.previous);

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await res.json();
      return data;
    });

    Promise.all(promises).then((pokemonData) => {
      const orderedPokemon = pokemonData.sort((a, b) => a.id - b.id);
      setAllPokemon(orderedPokemon);
    });
  }

  useEffect(() => {
    getAllPokemon(nextUrl);
  }, []);

  const handleNextPage = () => {
    getAllPokemon(nextUrl);
  }

  const handlePrevPage = () => {
    getAllPokemon(prevUrl);
  }

  return (
    <div className="app-container" >
      <div>
        <h1 class="pokeFont">Search Pokemon:</h1>
        <PokemonSearchBar />
      </div>

      <h1 class="pokeFont">Pokedex RE(act/invented)</h1>
      <small>Andy & Alex</small>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon,index) => {
            const types = pokemon.types.map(type => type.type.name).join(", ");
            return (
              <PokemonCard 
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                types={types}
                key={index}
              />
            );
          })}
        </div>
        {prevUrl && <button className="load-more" onClick={handlePrevPage}>Previous Page</button>}
        {nextUrl && <button className="load-more" onClick={handleNextPage}>Next Page</button>}
      </div>
    </div>
  );
}

export default App;
