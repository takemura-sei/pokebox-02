import { usePokemonStore } from '@/store/pokemonStore';

export const usePokemon = () => {
  // ポケモンデータを管理する Pinia ストアを取得
  const pokemonStore = usePokemonStore();

  // ポケモンリストを取得する関数
  const fetchAllPokemon = async () => {
    await pokemonStore.fetchPokemonList();
  };

  // IDで特定のポケモンを取得する関数
  const fetchPokemonDetails = async (id) => {
    await pokemonStore.fetchPokemonById(id);
  };

  // 関数と状態を返す
  return {
    fetchAllPokemon,
    fetchPokemonDetails,
    pokemonList: pokemonStore.pokemonList,
    selectedPokemon: pokemonStore.selectedPokemon,
  };
};

