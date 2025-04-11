<template>
  <nav class="mobile-nav-container">
    <RouterLink
      v-for="item in NAV_ITEMS"
      :key="item.name"
      :to="item.path"
      class="mobile-nav-item"
      :class="{ active: isActive(item.path) }"
    >
      <img :src="item.icon" :alt="item.name + ' icon'" class="nav-icon" />
      <div class="label">{{ item.name }}</div>
    </RouterLink>
  </nav>
</template>

<script lang="ts" setup>
import { NAV_ITEMS } from '../constants'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => route.path === path
</script>

<style scoped>
.mobile-nav-container {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

.mobile-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--light-grey-color);
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  filter: brightness(0) saturate(100%) invert(82%) sepia(0%) saturate(7478%) hue-rotate(182deg) brightness(92%) contrast(85%)
}

.mobile-nav-item.active {
  color: var(--primary-color);
}

.mobile-nav-item.active .nav-icon {
  filter: brightness(0) saturate(100%) invert(57%) sepia(67%) saturate(488%) hue-rotate(84deg) brightness(94%) contrast(89%);
}
</style>
