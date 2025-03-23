export interface Pokemon {
  id: number
  name: string
  image: string
}

export interface PokemonListResponse {
  count: number
  results: Pokemon[]
}

export interface PokemonDetail {
  id: number
  name: string
  image: string
  height: number
  weight: number
  types: string[]
  abilities: string[]
  stats: Stats
}

export interface Stats {
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

