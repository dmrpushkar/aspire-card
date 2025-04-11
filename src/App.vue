<template>
  <div class="app-container">
    <WebNavbar v-if="!isMobile" />
    <div class="page-section">
      <RouterView />
    </div>
    <MobileNavbar v-if="isMobile" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import WebNavbar from './layouts/WebNavbar.vue';
import MobileNavbar from './layouts/MobileNavbar.vue';
import { APP_CONFIG } from './constants';

const isMobile = ref(window.innerWidth <= APP_CONFIG.MOBILE_BREAKPOINT);

function handleResize() {
  isMobile.value = window.innerWidth <= APP_CONFIG.MOBILE_BREAKPOINT;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.page-section {
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 56px;
  width: 100%;
}

@media (max-width: var(--mobile-breakpoint)) {
  .app-container {
    flex-direction: column;
  }

  .page-section {
    padding-bottom: 56px;
  }
}
</style>
