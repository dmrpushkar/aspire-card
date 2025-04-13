<template>
  <div class="cards-page">
    <div class="text-h6">
      <CardsHeader @update:tab="activeTab = $event" />
    </div>
    <div class="tabs-section">
      <MyCardsTab v-if="activeTab === 'self'" />
      <div v-else class="coming-soon">
        <div class="content">
          <p>This section is not yet available. For now, please check out the My Debit Cards section to see the implemented features!</p>
        </div>
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

.coming-soon {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: white;
  border-radius: 12px;

  .content {
    text-align: center;
    max-width: 400px;

    h3 {
      color: var(--dark-blue-color);
      margin-bottom: 16px;
      font-size: 24px;
    }

    p {
      color: var(--text-color);
      margin-bottom: 24px;
      line-height: 1.5;
    }
  }
}
</style>
