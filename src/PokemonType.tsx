import { capitalizeFirstLetter, setColorHex } from "./helper";
import './PokemonType.css';

export default function PokemonType({pokemonType}: {pokemonType: string}) {
  return <div className="type_label" style={{
    backgroundColor: `${setColorHex(pokemonType)}`
  }}>{capitalizeFirstLetter(pokemonType)}</div>
}