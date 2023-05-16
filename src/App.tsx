import './App.css';
import PokemonCard from './PokemonCard';
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState<Array<PokemonInfo>>([]);

  const fetchPokemons = async () => {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=12"
    );
    const responseToJson = await response.json();
    setPokemons(responseToJson.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
      <div className="main_container">
        <div className="pokemons">
          {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.name} info={pokemon}/>
          ))}
        </div>
        <button className="action_load_more">
          Load more
        </button>
      </div>
  )
}

export default App
