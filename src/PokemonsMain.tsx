import PokemonCard from "./PokemonCard";
import './PokemonsMain.css';
import { API_LINK, POKEMONS_LIMIT } from "./constants.js";
import { useEffect, useState } from "react";

export default function PokemonsMain() {
  const [pokemons, setPokemons] = useState<Array<PokemonInfo>>([]);

  const fetchPokemons = async () => {
    const response = await fetch(
        `${API_LINK}pokemon/?limit=${POKEMONS_LIMIT}`
    );
    const responseToJson = await response.json();
    setPokemons(responseToJson.results);
    console.log('RESPONSE', pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return <div className="pokemons_container">
    <div className="pokemon_cards">
      {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name}
                       info={pokemon}/>
      ))}
    </div>
    <button className="action_load_more">
      Load more
    </button>
  </div>
}