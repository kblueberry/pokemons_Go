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

export function setColorHex(type: string) {
  switch (type) {
    case 'grass':
      return '#2fcc51';
    case 'fire':
      return '#c7591a';
    case 'poison':
      return '#ae5bb5';
    case 'flying':
      return '#0af7f7';
    case 'bug':
      return '#77a832';
    case 'normal':
      return '#d91838';
    default :
      return '#f7e80a';
  }
}
