<!-- /src/components/modal/Modal.vue -->
<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal_backdrop" @click="emit('close')">
    <div class="modal_content" @click.stop>
      <slot></slot>
      <button @click="emit('close')">Close</button>
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
