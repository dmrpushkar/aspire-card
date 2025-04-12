<template>
  <div class="q-pa-md">
    <div class="text-h6 q-mb-md">
      <CardsHeader @update:tab="activeTab = $event" />
    </div>
      <MyCardsTab />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardsHeader from './cards-header'
import MyCardsTab from './my-cards-tab'

const activeTab = ref('self')
</script>
