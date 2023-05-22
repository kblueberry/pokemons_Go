import { GlobalConstants } from "./constants";

export function fetchPage(offset: number = GlobalConstants.startPageOffset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${GlobalConstants.pokemonLimit}`)
      .then(response => response.json())
}

export function fetchOne(url: string) {
  return fetch(url)
      .then(response => response.json())
}

export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}