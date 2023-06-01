import PokemonCard from "./PokemonCard";
import './PokemonsMain.css';
import { useCallback, useEffect, useState } from "react";
import { fetchAllPokemonTypes, fetchPage, fetchPokemonsByType } from "../../common/helpers/api";
import { GlobalConstants } from "../../common/helpers/constants";
import FilterPokemonsAction from "./FilterPokemonsAction";
import Spinner from "../../common/components/Spinner";

function PokemonsMain() {
  const [pokemons, setPokemons] = useState<Array<PokemonGeneralInfo>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [pokemonTypes, setPokemonTypes] = useState<Array<string>>([]);
  const [pokemonsLoading, setPokemonsLoading] = useState<boolean>(false);

  const fetchPokemons = useCallback(() => {
    if (!hasNext) return;
    setPokemonsLoading(true);
    fetchPage(offset).then((response: PokemonsDataChunk) => {
      setOffset((old: number) => old + response.results.length);
      setHasNext(!!response.next);
      setPokemons((old: Array<PokemonGeneralInfo>) => [...old, ...response.results]);
      setPokemonsLoading(false);
    });
  }, [offset]);

  const fetchPokemonTypes = () => {
    fetchAllPokemonTypes().then((response: PokemonsDataChunk) => {
      setPokemonTypes([...response.results.map(item => item.name)]);
    });
  }

  const filterPokemons = (id: string) => {
    fetchPokemonsByType(id).then((response: FilteredPokemons) => {
      const filtered = response.pokemon.map(item => item.pokemon);
      setPokemons([...filtered]);
    });
  }

  useEffect(() => {
    if (offset === 0) {
      fetchPokemons();
      fetchPokemonTypes();
    }
  }, [offset, fetchPokemons]);

  return <div className="pokemons_container">
    {pokemonsLoading ? <Spinner customStyles={{
          width: '15em',
          height: '15em',
          margin: '25em auto'
        }}/> :
        <>
          <FilterPokemonsAction pokemonTypes={pokemonTypes}
                                selected={filterPokemons}/>
          <div className="pokemon_cards">
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.name}
                             info={pokemon}/>
            ))}
          </div>
          <button disabled={pokemonsLoading}
                  className="action_load_more"
                  onClick={fetchPokemons}>
            {GlobalConstants.loadMoreAction}
          </button>
        </>}
  </div>
}

export default PokemonsMain