<script setup>
import { usePokemonStore } from '@/store/pokemonStore';
import PokemonCard from './PokemonCard.vue';

const pokemonStore = usePokemonStore();

onMounted(async () => {
  await pokemonStore.fetchPokemonAddress();
});

</script>

<template>
  <div v-if="pokemonStore.pokemonList.length > 0">
    <ul class="pokemon_list">
      <!-- pokemonListをループして各ポケモンの情報を表示 -->
      <li v-for="pokemon in pokemonStore.pokemonList" :key="pokemon.name" class="pokemon_item">
        <h3>{{ pokemon.name }}</h3> <!-- ポケモンの名前を表示 -->
        <PokemonCard :url="pokemon.url" :name="pokemon.name"/>
      </li>
    </ul>
  </div>
  <p v-else>Loading Pokémon data...</p>
</template>

<style scoped>
.pokemon_list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.pokemon_item {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
