<script setup>
import { usePokemonStore } from '@/store/pokemonStore';

// URLをpropで受け取る
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const pokemonStore = usePokemonStore();
const pokemonImageUrl = ref('');

onMounted(async () => {
  await pokemonStore.fetchPokemonImage(props.name, props.url);
  pokemonImageUrl.value = pokemonStore.pokemonImage[props.name];
});
</script>

<template>
  <div>
    <img :src="pokemonImageUrl" alt="Pokemon Image" />
  </div>
</template>

