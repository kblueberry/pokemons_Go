export const POKEMONS_LIMIT = 12;

export function fetchPage(offset = 0) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${POKEMONS_LIMIT}`)
      .then(response => response.json() as PokemonsDataChunk)
}

export function fetchOne(url: string) {
  return fetch(url)
      .then(response => response.json() as PokemonDetails)
}

export function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}