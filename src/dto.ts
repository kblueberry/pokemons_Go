type PokemonGeneralInfo = {
  name: string,
  url: string
}

type PokemonsDataChunk = {
  count: number,
  next: string,
  previous: string,
  results: Array<PokemonGeneralInfo>
}

type PokemonDetails = {
  abilities: Array<{
    ability: PokemonGeneralInfo,
    is_hidden: boolean,
    slot: number
  }>,
  base_experience: number,
  forms: Array<PokemonGeneralInfo>,
  game_indices: Array<{
    game_index: number,
    version: PokemonGeneralInfo
  }>,
  height: number,
  held_items: Array<any>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<{
    move: PokemonGeneralInfo,
    version_group_details: Array<{
      level_learned_at: number,
      move_learn_method: PokemonGeneralInfo,
      version_group: PokemonGeneralInfo
    }>
  }>,
  name: string,
  order: number,
  past_types: Array<any>,
  species: PokemonGeneralInfo,
  sprites: Sprite,
  stats: {
    base_stat: number,
    effort: number,
    stat: PokemonGeneralInfo
  },
  types: Array<{
    slot: number,
    type: PokemonGeneralInfo
  }>,
  weight: number
}

type Sprite = {
  back_default: string,
  back_female: boolean,
  back_shiny: string,
  back_shiny_female: boolean,
  front_default: string,
  front_female: boolean,
  front_shiny: string,
  front_shiny_female: boolean,
  other: {
    dream_world: {
      front_default: string,
      front_female: null
    },
    home: {
      front_default: string,
      front_female: null,
      front_shiny: string,
      front_shiny_female: null
    },
    official_artwork: {
      front_default: string,
      front_shiny: string
    }
  },
  versions: any,
}

