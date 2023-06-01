import { capitalizeFirstLetter, setColorHex } from "../../common/helpers/helper";
import './PokemonType.css';

export default function PokemonType({pokemonType}: {pokemonType: string}) {
  return <div className="type_label" style={{
    color: '#000',
    backgroundColor: `${setColorHex(pokemonType)}`
  }}>{capitalizeFirstLetter(pokemonType)}</div>
}