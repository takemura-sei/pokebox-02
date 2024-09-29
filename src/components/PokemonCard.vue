<script setup>
import PokemonName from '@/components/cards/PokemonName.vue';
import PokemonImage from '@/components/cards/PokemonImage.vue'
import Modal from '@/components/modal/Modal.vue';
import { useModal } from '@/composables/useModal';

const { showModal, selectedItem, openModal, closeModal } = useModal(); // モーダル関数を使用

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
  <div @click="openModal(props)">
    <PokemonName :name="props.name" :url="props.url" />
    <PokemonImage :name="props.name" :url="props.url"/>

    <!-- モーダルウィンドウを表示 -->
    <Modal v-if="showModal" @close="closeModal" />
  </div>
</template>



