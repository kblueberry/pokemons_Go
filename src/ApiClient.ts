const POKEMONS_LIMIT = 12;

export function fetchAll() {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${POKEMONS_LIMIT}`)
      .then(response => response.json() as PokemonsDataChunk)
}

export function fetchOne(url: string) {
  return fetch(url
  ).then(response => response.json() as PokemonDetails)
}

