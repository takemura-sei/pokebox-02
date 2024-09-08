import { fetchData } from '@/services/pokemonApi';

export const usePokemonStore = defineStore('pokemon', { 
  state: () => ({
    pokemonList: [],
    selectedPokemon: null,
  }),
  actions: {
    async fetchPokemonList(limit = 151) {
      try {
        const data = await fetchData(`pokemon?limit=${limit}`);
        this.pokemonList = data.results;
      } catch (error) {
        console.error('Failed to fetch Pokémon list:', error);
      }
    },
    
    async fetchPokemonById(id) {
      try {
        this.selectedPokemon = await fetchData(`pokemon/${id}`);
      } catch (error) {
        console.error('Failed to fetch Pokémon by ID:', error);
      }
    },

    async fetchPokemonDetails(url) {
      try {
        this.selectedPokemon = await fetchData(url);
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    },
  },
});
