<script setup>
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
    <PokemonImage :name="props.name" :url="props.url"/>
  </div>
</template>



