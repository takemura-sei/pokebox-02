// /store/pokemonStore.js

export const usePokemonStore = defineStore('pokemon', { // 'pokemon' はこのstoreの名前
  state: () => ({
    pokemonList: [],
    selectedPokemon: null,
  }),
  actions: {
    async fetchPokemonList() {
      try {
        // useNuxtApp: Nuxt 3 のコンポーネントや composable からアプリケーションインスタンスにアクセスするための関数です。
        // Nuxtアプリケーションのインスタンスにアクセスし、$apiを取得
        const { $api } = useNuxtApp();
        const response = await $api.get('pokemon?limit=151');
        this.pokemonList = response.data.results;
      } catch (error) {
        console.error('Failed to fetch Pokémon list:', error);
      }
    },
    async fetchPokemonById(id) {
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get(`pokemon/${id}`);
        this.selectedPokemon = response.data;
      } catch (error) {
        console.error('Failed to fetch Pokémon data:', error);
      }
    },
    async fetchPokemonDetails(url) {
      try {
        const { $api } = useNuxtApp();
        const response = await $api.get(url);
        this.selectedPokemon = response.data;
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    },
  },
});
