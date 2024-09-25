<!-- /pages/index.vue -->
<script setup>
import PokemonList from '@/components/PokemonList.vue';
import Pagination from '@/components/Pagination.vue';
import { usePokemonStore } from '@/store/pokemonStore';
import { usePaginationStore } from '@/store/paginationStore';

const pokemonStore = usePokemonStore()
const paginationStore = usePaginationStore()

watch(() => paginationStore.currentPage, () => {
  pokemonStore.fetchPokemonAddress()
})

onMounted(() => {
  pokemonStore.fetchPokemonAddress()
})

useHead ({
  title: 'ポケモン図鑑',
})
</script>

<template>
  <div class="container">
    <PokemonList />
    <Pagination />
  </div>
</template>

<style scoped>
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(203, 238, 238);
}
</style>
