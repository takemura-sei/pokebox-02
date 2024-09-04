<!-- /components/PokemonCard.vue -->
<script setup>
import { usePokemonStore } from '@/store/pokemonStore'

const pokemonStore = usePokemonStore()

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div>
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>
