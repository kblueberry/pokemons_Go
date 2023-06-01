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
  stats: Array<{
    base_stat: number,
    effort: number,
    stat: PokemonGeneralInfo
  }>,
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

type FilteredPokemons = {
  damage_relations: DamageRelation,
  game_indices: Array<GameIndices>,
  generation: PokemonGeneralInfo,
  id: number,
  move_damage_class: PokemonGeneralInfo,
  moves: Array<PokemonGeneralInfo>,
  name: string,
  names: Array<PokemonGeneralInfo>,
  past_damage_relations: Array<DamageRelation>,
  pokemon: Array<Pokemon>
}

type Pokemon = {
  pokemon: PokemonGeneralInfo,
  slot: number
}

type GameIndices = {
  game_index: number,
  generation: PokemonGeneralInfo
}

type DamageRelation = {
  double_damage_from: Array<PokemonGeneralInfo>,
  double_damage_to: Array<any>,
  half_damage_from: Array<any>,
  half_damage_to: Array<PokemonGeneralInfo>,
  no_damage_from: Array<PokemonGeneralInfo>,
  no_damage_to: Array<PokemonGeneralInfo>
}

