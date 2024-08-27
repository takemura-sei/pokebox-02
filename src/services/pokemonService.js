// /services/pokemonService.js
export const usePokemonService = () => {
  const { $api } = useNuxtApp()

  // 特定のポケモンを名前またはIDで取得するメソッド
  const getPokemon = async (identifier) => {
    try {
      const response = await $api.get(`/pokemon/${identifier}`)
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)
      throw error
    }
  }

  // 全ポケモンを取得するメソッド
  const getAllPokemon = async (limit = 151, offset = 0) => {
    try {
      const response = await $api.get(`/pokemon`, {
        params: { limit, offset }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon list:', error)
      throw error
    }
  }

  return {
    getPokemon,
    getAllPokemon,
  }
}
