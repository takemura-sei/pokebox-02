<script setup>
import PokemonList from '@/components/PokemonList.vue';
import { usePokemon } from '@/composables/usePokemon';

useHead({
  title: 'ポケモン図鑑',
});

// ポケモンデータを取得
const { fetchAllPokemon, pokemonList } = usePokemon();

onMounted(() => {
  fetchAllPokemon();
});
</script>

<template>
  <div>
    <!-- PokemonList コンポーネントにポケモンリストを渡す -->
    <PokemonList :pokemons="pokemonList" />
  </div>
</template>

