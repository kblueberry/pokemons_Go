import './PokemonCard.css';

type PokemonProps = {
  info: PokemonInfo
}

function PokemonCard({info}: PokemonProps) {
  return (
      <>
        <div className="pokemon_info">
          <h5>{info.name}</h5>
        </div>
      </>
  )
}

export default PokemonCard