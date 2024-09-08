<!-- /components/PokemonCard.vue -->
<script setup>
import { usePokemonStore } from '@/store/pokemonStore'

const pokemonStore = usePokemonStore()

const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})


// ポケモンの詳細データを保持するためのref
const pokemonDetails = ref(null);

// コンポーネントがマウントされたときにポケモン詳細データを取得
onMounted(async () => {
  await pokemonStore.fetchPokemonDetails(props.pokemon.url);
  pokemonDetails.value = pokemonStore.selectedPokemon;
  console.log(pokemonDetails.value)
});

</script>

<template>
  <div v-if="pokemonDetails">
    <h3>{{ pokemonDetails.name }}</h3>
    <!-- ポケモンの画像を表示 -->
    <img :src="pokemonDetails.sprites.front_default" :alt="pokemonDetails.name" />
  </div>
  <p v-else>Loading...</p>
</template>
