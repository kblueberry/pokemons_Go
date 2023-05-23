import PokemonCard from "./PokemonCard";
import './PokemonsMain.css';
import { useCallback, useEffect, useState } from "react";
import { fetchPage } from "./helper";
import { GlobalConstants } from "./constants";
import FilterPokemonsAction from "./FilterPokemonsAction";

function PokemonsMain() {
  const [pokemons, setPokemons] = useState<Array<PokemonGeneralInfo>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const fetchPokemons = useCallback(() => {
    if (!hasNext) return;
    fetchPage(offset).then((response: PokemonsDataChunk) => {
      setOffset((old: number) => old + response.results.length);
      setHasNext(!!response.next);
      setPokemons((old: Array<PokemonGeneralInfo>) => [...old, ...response.results]);
    });
  }, [offset]);

  useEffect(() => {
    if (offset === 0) {
      fetchPokemons();
    }
  }, [offset, fetchPokemons]);

  return <div className="pokemons_container">
    <FilterPokemonsAction />
    <div className="pokemon_cards">
      {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name}
                       info={pokemon}/>
      ))}
    </div>
    <button className="action_load_more"
            onClick={fetchPokemons}>
      {GlobalConstants.loadMoreAction}
    </button>
  </div>
}

export default PokemonsMain