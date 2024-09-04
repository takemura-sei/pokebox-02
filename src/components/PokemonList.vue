<script setup>
import PokemonCard from '@/components/PokemonCard.vue';
import { usePokemonStore } from '~/store/pokemonStore';

const pokemonStore = usePokemonStore()
console.log(pokemonStore.pokemonList.length)

onMounted(async () => {
  await pokemonStore.fetchPokemonList()
})
</script>

<template>
  <div>
    <ul v-if="pokemonStore.pokemonList.length">
      <li v-for="pokemon in pokemonStore.pokemonList" :key="pokemon.name">
        <PokemonCard :pokemon="pokemon" />
        <pre>{{ pokemon }}</pre> <!-- JSON形式で確認 -->
      </li>
    </ul>
  </div>
</template>