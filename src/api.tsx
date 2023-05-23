import { GlobalConstants } from "./constants";

export function fetchPage(offset = GlobalConstants.startPageOffset) {
  return fetch(`${GlobalConstants.pokemonApi}pokemon/?offset=${offset}&limit=${GlobalConstants.pokemonLimit}`)
      .then(response => response.json() as PokemonsDataChunk)
}

export function fetchOne(url: string) {
  return fetch(url)
      .then(response => response.json() as PokemonDetails)
}

export function fetchAllPokemonTypes() {
  return fetch(`${GlobalConstants.pokemonApi}type`)
      .then(response => response.json() as PokemonsDataChunk);
}