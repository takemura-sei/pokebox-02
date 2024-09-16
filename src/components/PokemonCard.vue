<script setup>
import PokemonName from '@/components/cards/PokemonName.vue';
import PokemonImage from '@/components/cards/PokemonImage.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div>
    <PokemonName :name="props.name" :url="props.url" />
    <PokemonImage :name="props.name" :url="props.url"/>
  </div>
</template>



