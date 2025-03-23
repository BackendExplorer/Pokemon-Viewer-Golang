import { useQuery } from '@tanstack/react-query'
import { PokemonDetail } from '../types/pokemon'



export const usePokemonDetail = (pokemonId: number | null) => {
  return useQuery<PokemonDetail>({
    queryKey: ['pokemon', pokemonId],
    queryFn: async () => {
      if (!pokemonId) return null
      const response = await fetch(`http://localhost:8080/pokemon/${pokemonId}`)
      if (!response.ok) {
        throw new Error('ポケモンデータの取得に失敗しました')
      }
      return response.json()
    },
    enabled: !!pokemonId,
  })
} 
