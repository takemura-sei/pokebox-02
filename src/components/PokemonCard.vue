<!-- /components/PokemonCard.vue -->
<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  },
});

</script>

<template>
  <div class="pokemon-card">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  text-align: center;
  padding: 10px;
}
.pokemon-card img {
  width: 100px;
  height: 100px;
}
</style>