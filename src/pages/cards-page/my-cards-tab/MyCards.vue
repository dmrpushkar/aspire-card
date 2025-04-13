<template>
  <div class="cards-tab">
    <div class="row">
      <div class="col-12 col-md-7 left-column">
        <CardsCarousel />
        <CardActions />
      </div>

      <div class="col-12 col-md-5 right-column">
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
  padding: 16px;
}

.row {
  margin: -16px;

  > div {
    padding: 16px;
  }
}

@media (max-width: $mobile-breakpoint) {
  .cards-tab {
    padding: 0;
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
