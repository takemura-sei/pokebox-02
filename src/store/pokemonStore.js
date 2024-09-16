import { fetchData } from '@/services/pokemonApi';

export const usePokemonStore = defineStore('pokemon', { 
  state: () => ({
    pokemonList: [], 
    pokemonName: {},
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
    async fetchPokemonJpName(name, url) {
      try {
        const pokemonDetails = await fetchData(url);
        const pokemonSpecies = await fetchData(pokemonDetails.species.url);
        // names配列から日本語名を探す
        const jpNameEntry = pokemonSpecies.names.find(
          entry => entry.language.name === 'ja'
        );
        if (jpNameEntry) {
          this.pokemonName[name] = jpNameEntry.name;
        } else {
          console.error('Japanese name not found for:', name);
        }
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    },
    async fetchPokemonImage(name, url) {
      try {
        const pokemonDetails = await fetchData(url);
        console.log(pokemonDetails.species.url);
        const imageUrl = pokemonDetails.sprites.front_default;
        this.pokemonImage[name] = imageUrl;
      } catch (error) {
        console.error('Failed to fetch Pokémon details:', error);
      }
    }
  },
});
