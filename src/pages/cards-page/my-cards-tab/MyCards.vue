<template>
  <div class="cards-tab">
    <div class="content-wrapper">
      <div class="left-section">
        <CardsCarousel />
        <CardActions />
      </div>

      <div class="right-section">
        <CardDetails />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsCarousel from './cards-carousel';
import CardActions from './card-actions';
import CardDetails from './card-additional-info';
</script>

<style lang="scss" scoped>
.cards-tab {
  padding: 32px;

  @media (max-width: $mobile-breakpoint) {
    padding: 16px;
  }
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  gap: 32px;
  padding: 0 32px;

  @media (max-width: $mobile-breakpoint) {
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }
}

.left-section {
  width: 414px;

  @media (max-width: $mobile-breakpoint) {
    width: 100%;
    background-color: #0C365A;
    padding: 24px 0 0;
  }
}

.right-section {
  flex: 1;
  max-width: 480px;
  margin-top: 22px;

  @media (max-width: $mobile-breakpoint) {
    margin-top: 0;
    padding: 16px;
  }
}

@media (max-width: $mobile-breakpoint) {
  .cards-tab {
    padding: 0;
  }

  .left-section {
    background-color: #0C365A;
    padding: 24px 0 0;
  }

  .row {
    margin: 0;
  }

  .left-column {
    padding: 0;
    background: var(--primary-background-color);
  }

  .right-column {
    padding: 16px;
  }
}
</style>
