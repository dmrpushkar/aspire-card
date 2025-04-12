<template>
  <q-carousel
    swipeable
    animated
    control-type="flat"
    navigation
    class="bg-white text-black shadow-md rounded-lg q-pa-md"
    v-model="selectedCardIndex"
    height="200px"
  >
    <q-carousel-slide
      v-for="(card, index) in cards"
      :key="index"
      :name="index"
      class="flex flex-col items-start justify-between p-4"
    >
      <div>
        <div class="text-sm text-gray-500 mb-1">{{ card.type }}</div>
        <div class="text-lg font-bold">{{ card.number }}</div>
      </div>
      <div class="text-xs text-gray-400 mt-2">Expires {{ card.expiry }}</div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCardIndex = ref(0)

const cards = ref([
  {
    type: 'Visa',
    number: '**** **** **** 1234',
    expiry: '12/26'
  },
  {
    type: 'MasterCard',
    number: '**** **** **** 5678',
    expiry: '08/25'
  }
])
</script>

<style scoped>
.q-carousel {
  width: 100%;
}
.q-carousel-slide {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>
