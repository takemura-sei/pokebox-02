<script setup>
import PokemonCard from '@/components/PokemonCard.vue';
import { usePokemonStore } from '~/store/pokemonStore';

const pokemonStore = usePokemonStore()

onMounted(async () => {
  await pokemonStore.fetchPokemonList()
})
</script>

<template>
  <div>
    <ul class="pokemonList">
      <li v-for="pokemon in pokemonStore.pokemonList" :key="pokemon.name" class="pokemonItem">
        <PokemonCard :pokemon="pokemon" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pokemonList {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 5列のグリッド */
  gap: 10px;
  justify-items: center;
}

.pokemonItem {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
}
</style>