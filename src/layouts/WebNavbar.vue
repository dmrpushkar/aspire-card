<template>
  <nav class="navbar-container">
    <div class="web-only">
      <div class="logo-section">
        <img src="../assets/aspire-logo-full.png" alt="Aspire Logo" class="logo-image" />
        <p class="logo-text">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      </div>

      <ul class="nav-list">
        <li v-for="item in NAV_ITEMS" :key="item.name" class="nav-item">
          <RouterLink :to="item.path" class="nav-link">
            <img :src="item.icon" :alt="item.name + ' icon'" class="nav-icon" />
            <span class="nav-text">{{ item.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { NAV_ITEMS } from '../constants'
</script>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--primary-background-color);
}

.web-only {
  display: flex;
  flex-direction: column;
  padding: 48px;
  width: 340px;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 62px;

  .logo-image {
    margin-bottom: 24px;
  }

  .logo-text {
    color: var(--gray-text-color);
    font-size: 15px;
    line-height: 1.4;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.nav-item {
  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    gap: 16px;

    &.router-link-active .nav-text {
      color: var(--primary-color);
      font-weight: 600;
    }

    &.router-link-active .nav-icon {
      filter: var(--primary-color-filter);
    }
  }

  .nav-icon {
    width: 24px;
    height: 24px;
    filter: var(--white-color-filter);
  }

  .nav-text {
    font-size: 16px;
  }
}

@media (max-width: $mobile-breakpoint) {
  .web-only {
    display: none;
  }
}
</style>
