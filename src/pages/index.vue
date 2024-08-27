<template>
  <div v-if="pokemon">
    <h1>Pokémon: {{ pokemon.name }}</h1>
    <p>ID: {{ pokemon.id }}</p>
    <img :src="pokemon.sprites.front_default" alt="pokemon" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { usePokemonService } from '~/services/pokemonService'
import { ref, onMounted } from 'vue'

const { getPokemon } = usePokemonService()
const pokemon = ref(null)

onMounted(async () => {
  pokemon.value = await getPokemon('pikachu') // ピカチュウのデータを取得
})
</script>
