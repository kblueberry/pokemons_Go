import './PokemonCard.css';

type PokemonProps = {
  info: PokemonInfo
}

function PokemonCard({info}: PokemonProps) {
  return (
      <>
        <div className="pokemon_info">
          <h5>{info.name.charAt(0).toUpperCase()
              + info.name.slice(1)}</h5>
          <a className="pokemon_details_open_action">
            Get info
          </a>
        </div>
      </>
  )
}

export default PokemonCard