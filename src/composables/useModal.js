// /src/composables/useModal.js
export function useModal() {
  const showModal = ref(false);
  const selectedItem = ref(null);

  const openModal = (item) => {
    selectedItem.value = item;
    showModal.value = true;
    console.log(item.name);
  }

  const closeModal = () => {
    selectedItem.value = null;
    showModal.value = false;
  }

  return {
    showModal,
    selectedItem,
    openModal,
    closeModal,
  };
}