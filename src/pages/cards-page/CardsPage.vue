<template>
  <div class="text-h6">
    <CardsHeader @update:tab="activeTab = $event" />
  </div>
  <MyCardsTab />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardsHeader from './cards-header'
import MyCardsTab from './my-cards-tab'

const activeTab = ref('self')
</script>
