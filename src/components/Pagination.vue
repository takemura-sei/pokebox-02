<script setup>
import { usePaginationStore } from '@/store/paginationStore'

const paginationStore = usePaginationStore()
const currentPage = computed(() => paginationStore.currentPage)
const totalPages = computed(() => paginationStore.totalPages)

const isFirstPage = computed(() => currentPage.value === 1)
const isLastPage = computed(() => currentPage.value === totalPages.value)

const setPage = (page) => {
  paginationStore.setCurrentPage(page)
}

const prevPage = () => {
  if (!isFirstPage.value) {
    paginationStore.setCurrentPage(currentPage.value - 1)
  }
}

const nextPage = () => {
  if (!isLastPage.value) {
    paginationStore.setCurrentPage(currentPage.value + 1)
  }
}
</script>

<template>
  <nav aria-label="Pagination">
    <ul class="pagination">
      <li>
        <button @click="prevPage" :disabled="isFirstPage">Prev</button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button 
          :class="{ active: page === currentPage }" 
          @click="setPage(page)">
          {{ page }}
        </button>
      </li>
      <li>
        <button @click="nextPage" :disabled="isLastPage">Next</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  list-style: none;
}
.pagination li {
  margin: 0 5px;
}
button.active {
  font-weight: bold;
  color: blue;
}
</style>
