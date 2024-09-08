<script setup>
import { usePokemonStore } from '@/store/pokemonStore';
import PokemonCard from '@/components/PokemonCard.vue';

const pokemonStore = usePokemonStore();

onMounted(async () => {
  await pokemonStore.fetchAllPokemonDetails();  // 全ポケモンの詳細を最初に取得
});
</script>

<template>
  <div v-if="pokemonStore.pokemonList.length">
    <ul class="pokemon-list">
      <li v-for="pokemon in pokemonStore.pokemonList" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" />
      </li>
    </ul>
  </div>
  <p v-else>Loading...</p>
</template>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
}
.pokemon-list li {
  width: 150px;
}
</style>
