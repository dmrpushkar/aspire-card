<template>
  <nav class="mobile-nav-container">
    <RouterLink
      v-for="item in NAV_ITEMS"
      :key="item.name"
      :to="item.path"
      class="mobile-nav-item"
    >
      <div class="icon">{{ item.icon }}</div>
      <div class="label">{{ item.name }}</div>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { NAV_ITEMS } from '../constants'
</script>

<style scoped>
.mobile-nav-container {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.mobile-nav-item {
  text-decoration: none;
  color: #333;
}
</style>
