import "./PokemonCard.css";
import { usePokemonDetails } from "./PokemonDetailsProvider";
import { capitalizeFirstLetter } from "./helper";
import { GlobalConstants } from "./constants";

function PokemonCard({ info }: { info: PokemonGeneralInfo }) {
  const { onChange: onPokemonChange } = usePokemonDetails();

  return (
      <>
        <div className="pokemon_info">
          <h5 className="pokemon_name">{capitalizeFirstLetter(info.name)}</h5>
          <a
              className="pokemon_details_open_action"
              onClick={() => onPokemonChange(info.url)}
          >
            {GlobalConstants.getPokemonIngoAction}
          </a>
        </div>
      </>
  );
}

export default PokemonCard