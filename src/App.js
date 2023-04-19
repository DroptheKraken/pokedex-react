
import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";

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
    <div className="app-container">
      <h1>Pokedex RE</h1><small>Andy & Alex</small>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon,index) => <PokemonCard 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
            key={index}
          />)}
        </div>
        {prevUrl && <button className="load-more" onClick={handlePrevPage}>Previous Page</button>}
        {nextUrl && <button className="load-more" onClick={handleNextPage}>Next Page</button>}
      </div>
    </div>
  );
}

export default App;





