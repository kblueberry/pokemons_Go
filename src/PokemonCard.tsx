import "./PokemonCard.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";

function PokemonCard({ info }: { info: PokemonGeneralInfo }) {
  const { onChange: onPokemonChange } = usePokemonDetails();

  return (
      <>
        <div className="pokemon_info">
          <h5>{capitalizeFirstLetter(info.name)}</h5>
          <a
              className="pokemon_details_open_action"
              onClick={() => onPokemonChange(info.url)}
          >
            Get info
          </a>
        </div>
      </>
  );
}

export default PokemonCard