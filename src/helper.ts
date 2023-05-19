import { GlobalConstants } from "./constants";

export function fetchPage(offset = GlobalConstants.startPageOffset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${GlobalConstants.pokemonLimit}`)
      .then(response => response.json() as PokemonsDataChunk)
}

export function fetchOne(url: string) {
  return fetch(url)
      .then(response => response.json() as PokemonDetails)
}

export function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}