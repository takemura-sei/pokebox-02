<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pokemonImage() {
      const id = this.pokemon.url.split('/').filter(Boolean).pop();
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    },
  },
};
</script>

<template>
  <div class="pokemon-card">
    <img :src="pokemonImage" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  /* スタイルをここに追加 */
}
</style>
