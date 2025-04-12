<template>
  <q-page class="q-pa-md">
    <!-- Top Tabs -->
    <q-tabs
      v-model="activeTab"
      class="text-primary"
      align="left"
      narrow-indicator
      dense
    >
      <q-tab name="myCards" label="My Cards" />
      <q-tab name="companyCards" label="All Company Cards" />
    </q-tabs>

    <q-separator class="q-my-md" />

    <!-- Responsive Layout -->
    <div>
      <q-responsive :ratio="16/9">
        <!-- Desktop View -->
        <div v-if="$q.screen.gt.sm" class="row q-col-gutter-md">
          <div class="col-8">
            <!-- Card Carousel -->
            <CardCarousel />

            <!-- Card Actions -->
            <CardActions class="q-mt-md" />
          </div>

          <div class="col-4">
            <!-- Transaction List -->
            <TransactionList />
          </div>
        </div>

        <!-- Mobile View -->
        <div v-else>
          <CardCarousel />
          <!-- <CardActions class="q-mt-md" /> -->
          <!-- <TransactionList class="q-mt-md" /> -->
        </div>
      </q-responsive>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardCarousel from './cards-carousel/index.vue'
// import CardActions from '../cards-actions/index.vue'
// import TransactionList from '../transactions-list/index.vue'

const activeTab = ref('myCards')
</script>

<style scoped>
</style>
