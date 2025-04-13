<template>
  <button class="action-button">
    <div class="icon-wrapper">
      <img :src="icon" alt="action-icon" />
    </div>
    <span class="label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
}>();
</script>

<style lang="scss" scoped>
.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--dark-blue-color);
  font-size: 13px;
  font-weight: 500;
  width: 100%;
  min-width: 0;

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--primary-blue-color);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
    }
  }

  .label {
    text-align: center;
    line-height: 1.2;
    width: 100%;
    word-wrap: break-word;
    hyphens: auto;
  }
}
</style>
