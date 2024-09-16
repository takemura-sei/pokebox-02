import { fetchData } from '@/services/pokemonApi';

export const usePokemonStore = defineStore('pokemon', { 
  state: () => ({
    pokemonList: [], 
    pokemonImage: {},
  }),
  actions: {
    async fetchPokemonAddress() {
      try {
        const listData = await fetchData();
        console.log(listData.results);
        this.pokemonList = listData.results;
        return listData.results;
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    },
    async fetchPokemonImage(name, url) {
      try {
        const pokemonDetails = await fetchData(url);
        const imageUrl = pokemonDetails.sprites.front_default;
        this.pokemonImage[name] = imageUrl;
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    }
  },
});
