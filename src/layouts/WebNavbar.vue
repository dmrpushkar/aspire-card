<template>
  <nav class="navbar-container">
    <div class="web-only">
      <ul class="nav-list">
        <li v-for="item in NAV_ITEMS" :key="item.name">
          <RouterLink :to="item.path">
            <div>
              <span>{{ item.icon }}</span>
              <span>{{ item.name }}</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { NAV_ITEMS } from '../constants'
</script>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.web-only {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 16px;
  min-width: 200px;
}

@media (max-width: 768px) {
  .web-only {
    display: none;
  }
}
</style>
