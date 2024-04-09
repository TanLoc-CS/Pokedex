export interface Pokemon {
  name: string
  url: string
}

export type Pokedex = Array<Pokemon>

export interface PokemonGQL {
  id: number
  name: string
}

export type PokedexGQL = Array<PokemonGQL>


export interface PokemonProps {
  data: {
    name: String
    url: string
  }
}

export interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type Types = Array<Type>

export interface PokemonCard {
  image: string,
  id: number,
  types: Types;
}

export type PokemonId = { id: string }

export interface PokemonDetail {
  abilities: Array<{ ability: { name: string, url: string }, is_hidden: boolean, slot: number }>,
  base_experience: number,
  forms: Array<{ name: string, url: string }>,
  game_indices: Array<{ game_index: number, version: { name: string, url: string } }>,
  height: number,
  held_items: Array<{ item: { name: string, url: string }, version_details: Array<{ rarity: number, version: { name: string, url: string } }> }>
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<{ move: { name: string, url: string }, version_group_details: Array<{ level_learned_at: number, move_learn_method: { name: string, url: string }, version_group: { name: string, url: string } }> }>,
  name: string,
  order: number,
  past_type: Array<{ generation: { name: string, url: string }, types: Array<{ slot: number, type: { name: string, url: string } }> }>,
  species: { name: string, url: string },
  sprites: {
    back_default: string, back_female: string | null, back_shiny: string, back_shiny_female: string | null, front_default: string, front_female: null | string, front_shiny: string, front_shiny_female: null | string,
    other: {
      dream_world: {
        front_default: string,
        front_female: null | string
      }
      home: {
        front_default: string,
        front_female: null | string,
        front_shiny: string,
        front_shiny_female: null | string
      }
      'official-artwork': {
        front_default: string // use for profile
      }
    },
    versions: any,
  },
  stats: Array<{ base_stat: number, effort: number, stat: { name: string, url: string } }>,
  types: Array<{ slot: number, type: { name: string, url: string } }>
  weight: number
}

export type PokemonDetailArray = Array<PokemonDetail>

export interface PokemonDetailProp {
  pokemon: PokemonDetail
}