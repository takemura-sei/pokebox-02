import { fetchData } from '@/services/pokemonApi';
import { usePaginationStore } from '@/store/paginationStore';

export const usePokemonStore = defineStore('pokemon', { 
  state: () => ({
    pokemonList: [], 
    pokemonName: {},
    pokemonImage: {},
  }),
  actions: {
    async fetchPokemonAddress() {
      const paginationStore = usePaginationStore();
      const offset = (paginationStore.currentPage - 1) * paginationStore.itemsPerPage;
      const limit = paginationStore.itemsPerPage;

      try {
        // オフセットが151匹を超えないようにする
        const remainingPokemons = 151 - offset;
        const finalLimit = remainingPokemons < limit ? remainingPokemons : limit;

        const listData = await fetchData(`?limit=${finalLimit}&offset=${offset}`);
        console.log(listData.results);
        this.pokemonList = listData.results;

        paginationStore.setTotalPage();
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
