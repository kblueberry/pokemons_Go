import './PokemonCard.css';
import { useEffect, useState } from "react";

type PokemonProps = {
  info: PokemonInfo
}

function PokemonCard({info}: PokemonProps) {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetails>(null);

  const getPokemonInfo = async () => {
    const response = await fetch(`${info.url}`);
    const responseToJson = await response.json();
    console.log('Response=', responseToJson);

    setPokemonInfo(responseToJson);
    console.log('Details=', pokemonInfo);
  };

  return (
      <>
        <div className="pokemon_info">
          <h5>{info.name.charAt(0).toUpperCase()
              + info.name.slice(1)}</h5>
          <a className="pokemon_details_open_action"
             onClick={getPokemonInfo}>
            Get info
          </a>
        </div>
      </>
  )
}

export default PokemonCard