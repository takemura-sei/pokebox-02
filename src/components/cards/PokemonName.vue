<script setup>
import { usePokemonStore } from '@/store/pokemonStore';

const pokemonStore = usePokemonStore();
const pokemonJpName = ref('');

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

onMounted(async () => {
  await pokemonStore.fetchPokemonJpName(props.name, props.url);
  pokemonJpName.value = pokemonStore.pokemonName[props.name];
  console.log(pokemonJpName.value);
});

</script>

<template>
  <div>
    <h3>{{ pokemonJpName }}</h3>
  </div>
</template>