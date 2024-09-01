<script>
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: {
    PokemonCard,
  },
  props: {
    // 親コンポーネントから渡されるポケモンのリスト
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="pokemon-list">
    <!-- 'pokemons' は親コンポーネント（例えば index.vue）から渡される配列 -->
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped>
.pokemon-list {
  /* リスト全体のスタイルをここに追加します */
}
</style>
