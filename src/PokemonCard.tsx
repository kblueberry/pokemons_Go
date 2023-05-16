import './PokemonCard.css';

function PokemonCard({info}) {
  return (
      <>
        <div className="pokemon_info">
          <h5>{info.name}</h5>
        </div>
      </>
  )
}

export default PokemonCard