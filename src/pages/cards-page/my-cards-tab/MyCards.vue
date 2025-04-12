<template>
  <div class="cards-tab q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <CardsCarousel />
        <CardBalance />
        <CardActions />
      </div>

      <div class="col-12 col-md-6">
        <TransactionList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsCarousel from './cards-carousel';
import CardActions from './card-actions';
import TransactionList from './transactions-list';
</script>

<style scoped>
.cards-tab {
  border: 1px dashed #ccc;
}

@media (max-width: var(--mobile-breakpoint)) {
  .cards-tab {
  }
}
</style>
