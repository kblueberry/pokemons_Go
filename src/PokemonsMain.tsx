import PokemonCard from "./PokemonCard";
import './PokemonsMain.css';
import { useEffect, useState } from "react";
import { fetchAll } from "./ApiClient";

function PokemonsMain() {
  const [pokemons, setPokemons] = useState<Array<PokemonGeneralInfo>>([]);

  const fetchPokemons = async () => {
    fetchAll().then((response: PokemonsDataChunk) =>
        setPokemons(response.results));
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

export default PokemonsMain