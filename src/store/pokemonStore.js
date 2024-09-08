import { fetchData } from '@/services/pokemonApi';

export const usePokemonStore = defineStore('pokemon', { 
  state: () => ({
    pokemonList: [],  // すべてのポケモンの詳細情報を保持
  }),
  actions: {
    async fetchAllPokemonDetails() {
      try {
        const listData = await fetchData('pokemon?limit=151');
        
        // 各ポケモンの詳細情報を並行して取得
        const pokemonDetailsPromises = listData.results.map(async (pokemon) => {
          const details = await fetchData(pokemon.url);
          return details;
        });

        // 全てのポケモンの詳細情報を取得し、状態に保存
        this.pokemonList = await Promise.all(pokemonDetailsPromises);
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    },
  },
});
