<template>
  <div class="cards-header q-pa-md">
    <img :src="homeIcon" alt="home-icon" class="home-icon" />
    <div class="header-top row items-end justify-between">
      <CardBalance />
      <q-btn class="add-card-btn" unelevated no-caps>
        <img :src="addIcon" alt="add-icon" class="add-icon" />
        <span>New card</span>
      </q-btn>
    </div>

    <div class="header-tabs">
      <div class="tab-buttons">
        <button
          class="tab-btn"
          :class="{ active: selectedTab === 'self' }"
          @click="selectedTab = 'self'"
        >
          My debit cards
        </button>
        <button
          class="tab-btn"
          :class="{ active: selectedTab === 'all' }"
          @click="selectedTab = 'all'"
        >
          All company cards
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CardBalance from './card-balance';
import addIcon from 'assets/add-icon.svg';
import homeIcon from 'assets/home-icon.svg';

const selectedTab = ref('self');

const emit = defineEmits(['update:tab']);

watch(selectedTab, (newTab) => {
  emit('update:tab', newTab);
});
</script>

<style scoped>
.cards-header {
  width: 100%;
}

.header-top {
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 24px;
  justify-content: space-between;
}

.header-tabs {
  width: 100%;
  padding: 24px;

  .tab-buttons {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  .tab-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
    color: var(--gray-text-color);
    opacity: 0.5;
    cursor: pointer;
    position: relative;

    &.active {
      opacity: 1;
      color: black;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--light-blue-color);
        border-radius: 1px;
      }
    }
  }
}

:deep(.add-card-btn) {
  background: var(--dark-blue-color) !important;
  color: white !important;
  height: 36px !important;
  border-radius: 4px !important;
  font-weight: 600 !important;
}

.add-icon {
  margin-right: 8px;
}

:deep(.add-card-btn .q-btn__wrapper) {
  padding: 8px 24px;
  min-height: 36px;
}

.home-icon {
  display: none;
}

@media screen and (max-width: 768px) {
  .header-top {
    padding: 16px 8px;
  }
  .header-tabs {
    padding: 0px 8px;

    .tab-btn {
      color: white !important;

      &.active::after {
        background: var(--light-blue-color);
      }
    }
  }
  .cards-header {
    position: relative;
    background-color: var(--primary-background-color);
  }

  .home-icon {
    display: block;
    position: absolute;
    top: 10px;
    right: 22px;
    width: 24px;
    height: 24px;
    filter: var(--primary-color-filter);
  }

  .cards-header {
    color: white;
  }

  :deep(.add-card-btn) {
    .add-icon {
      filter: var(--light-blue-color-filter);
    }
    background: transparent !important;
    color: var(--light-blue-color) !important;
    padding: 0 !important;
    margin: 0 !important;
    min-height: 0 !important;
    height: auto !important;
  }

  :deep(.add-card-btn .q-btn__wrapper) {
    padding: 0 !important;
    min-height: 0 !important;
    height: auto !important;
  }

  :deep(.add-card-btn .q-btn__content) {
    margin: 0 !important;
    min-height: 0 !important;
    height: auto !important;
  }
}
</style>
