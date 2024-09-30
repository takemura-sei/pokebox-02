<!-- /src/components/modal/Modal.vue -->
<script setup>
import { usePokemonStore } from '@/store/pokemonStore';

const pokemonStore = usePokemonStore();
const pokemonImageUrl = ref('');

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

onMounted(async () => {
  await pokemonStore.fetchPokemonImage(props.name, props.url);
  pokemonImageUrl.value = pokemonStore.pokemonImage[props.name];
});

</script>

<template>
  <div class="modal_backdrop" @click.stop="$emit('close')">
    <div class="modal_content">
      <img :src="pokemonImageUrl" alt="">
      <button @click.stop="$emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal_backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
