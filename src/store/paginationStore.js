// /store/paginationStore.js
export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 20,
  }),
  actions: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
    setTotalPage() {
      // ポケモンは151匹までなので、151匹に基づいてページ数を計算
      this.totalPages = Math.ceil(151 / this.itemsPerPage);
    }
  },
})