import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    selectedPokemon: null,
  }),
  actions: {
    async fetchPokemonList() {
      try {
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
  },
});
