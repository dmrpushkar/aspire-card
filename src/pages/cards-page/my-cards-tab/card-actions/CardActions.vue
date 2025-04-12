<template>
  <div class="card-actions">
    <CardActionButton
      v-for="action in actions"
      :key="action.label"
      :icon="action.icon"
      :label="action.label"
      :alt="action.alt"
    />
  </div>
</template>

<script setup lang="ts">
import CardActionButton from './CardActionButton.vue';
import freezeIcon from 'assets/freeze-icon.svg';
import limitIcon from 'assets/spend-limit-icon.svg';
import gpayIcon from 'assets/gpay-icon.svg';
import cancelIcon from 'assets/delete-icon.svg';
import replaceIcon from 'assets/replace-icon.svg';

const actions = [
  {
    icon: freezeIcon,
    label: 'Freeze card',
    alt: 'Freeze card icon',
  },
  {
    icon: limitIcon,
    label: 'Set spend limit',
    alt: 'Set spend limit icon',
  },
  {
    icon: gpayIcon,
    label: 'Add to GPay',
    alt: 'Add to GPay icon',
  },
  {
    icon: replaceIcon,
    label: 'Replace card',
    alt: 'Replace card icon',
  },
  {
    icon: cancelIcon,
    label: 'Cancel card',
    alt: 'Cancel card icon',
  },
];
</script>

<style lang="scss" scoped>
.card-actions {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  padding: 24px;
  background-color: var(--secondary-background-color);
  border-radius: 12px;
  margin: 16px;
  min-width: 0;

  @media (max-width: $mobile-breakpoint) {
    gap: 12px;
    padding: 16px;
    margin: 8px;
  }
}
</style>
