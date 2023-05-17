import { API_LINK, POKEMONS_LIMIT } from "./constants";

export function fetchAll() {
  return fetch(
      `${API_LINK}pokemon/?limit=${POKEMONS_LIMIT}`
  ).then(response => response.json() as Array<PokemonInfo>)
}

export function fetchOne(url: string) {
  return fetch(url
  ).then(response => response.json() as PokemonDetails)
}

