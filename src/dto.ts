type PokemonInfo = {
  name: string,
  url: string
}

type PokemonsDataChunk = {
  count: number,
  next: string,
  previous: string,
  results: Array<PokemonInfo>
}