// /services/pokemonService.js

// ポケモンのデータを取得するサービスを定義する関数
export const usePokemonService = () => {
  // Nuxt アプリケーションのインスタンスから $api を取得
  const { $api } = useNuxtApp()

  // 特定のポケモンを名前またはIDで取得するメソッド
  const getPokemon = async (identifier) => {
    try {
      // PokéAPI の /pokemon/{identifier} エンドポイントにリクエストを送信
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
      // PokéAPI の /pokemon エンドポイントにリクエストを送信し、クエリパラメータとして limit と offset を設定
      const response = await $api.get(`/pokemon`, {
        params: { limit, offset }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon list:', error)
      throw error
    }
  }

  // サービスが提供するメソッドをオブジェクトとして返す
  return {
    getPokemon,      // 特定のポケモンを取得するメソッド
    getAllPokemon,   // 全ポケモンを取得するメソッド
  }
}

