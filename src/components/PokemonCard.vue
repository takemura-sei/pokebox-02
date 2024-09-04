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


// ポケモンの詳細データを保持するためのref
const pokemonDetails = ref(null);

// コンポーネントがマウントされたときにポケモン詳細データを取得
onMounted(async () => {
  await pokemonStore.fetchPokemonDetails(pokemon.url);
  pokemonDetails.value = pokemonStore.selectedPokemon;
});

</script>

<template>
  <div>
    <h3>{{ pokemon.name }}</h3>
    <p>{{ pokemon.url }}</p>
  </div>
</template>
