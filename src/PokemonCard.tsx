import './PokemonCard.css';
import { usePokemonDetails } from "./PokemonDetailsProvider";

type PokemonProps = {
  info: PokemonGeneralInfo
}

function PokemonCard({info}: PokemonProps) {
  const {onChange: onPokemonChange} = usePokemonDetails();


  return (
      <>
        <div className="pokemon_info">
          <h5>{info.name.charAt(0).toUpperCase()
              + info.name.slice(1)}</h5>
          <a className="pokemon_details_open_action"
             onClick={() => onPokemonChange(info.url)}>
            Get info
          </a>
        </div>
      </>
  )
}

export default PokemonCard