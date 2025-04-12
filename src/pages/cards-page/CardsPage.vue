<template>
  <div class="cards-page">
    <div class="text-h6">
      <CardsHeader @update:tab="activeTab = $event" />
    </div>
    <div class="tabs-section">
      <MyCardsTab v-if="activeTab === 'self'" />
      <div v-else class="q-pa-md">
        All company cards content here
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardsHeader from './cards-header';
import MyCardsTab from './my-cards-tab';

const activeTab = ref('self');
</script>

<style lang="scss" scoped>
.tabs-section {
  margin: 0 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: $mobile-breakpoint) {
    margin: 0;
    background: transparent;
    box-shadow: none;
  }
}
</style>
