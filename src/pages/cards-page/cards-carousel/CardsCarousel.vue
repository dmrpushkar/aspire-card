<template>
  <div class="q-pa-md">

    <!-- Grid Layout -->
    <q-layout view="lHh Lpr lFf">

      <q-page-container>

        <q-page class="q-pa-md">

          <q-gutter class="row q-col-gutter-md">

            <!-- Left Section -->
            <div class="col-12 col-md-8">

              <!-- Carousel -->
              <q-carousel
                v-model="carouselSlide"
                animated
                infinite
                control-color="primary"
                arrows
                height="200px"
              >
                <q-carousel-slide
                  v-for="(card, index) in cards"
                  :key="index"
                  :name="index.toString()"
                  class="q-pa-none"
                >
                  <CardComponent :card="card" />
                </q-carousel-slide>
              </q-carousel>

              <!-- Transactions List -->
              <q-list bordered class="q-mt-md">
                <q-item-label header>Transactions</q-item-label>

                <q-item v-for="(transaction, index) in transactions" :key="index">
                  <q-item-section>
                    <q-item-label>{{ transaction.title }}</q-item-label>
                    <q-item-label caption>{{ transaction.date }}</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label>{{ transaction.amount }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <!-- Actions -->
              <div class="q-mt-md">
                <q-btn label="Action 1" color="primary" class="q-mr-sm" />
                <q-btn label="Action 2" color="secondary" />
              </div>

            </div>

            <!-- Right Section (Will go to bottom in mobile view) -->
            <div class="col-12 col-md-4">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Additional Details</div>
                  <div class="text-subtitle2">Some more info or content here</div>
                </q-card-section>
              </q-card>
            </div>

          </q-gutter>

        </q-page>

      </q-page-container>

    </q-layout>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardComponent from './cards/index.vue'

// Carousel model
const carouselSlide = ref(0)

// Sample data
const cards = ref([
  { id: 'card1', title: 'Card 1', description: 'Description 1' },
  { id: 'card2', title: 'Card 2', description: 'Description 2' },
  { id: 'card3', title: 'Card 3', description: 'Description 3' }
])

const transactions = ref([
  { title: 'Transaction 1', date: '2025-04-10', amount: '$100' },
  { title: 'Transaction 2', date: '2025-04-11', amount: '$200' },
  { title: 'Transaction 3', date: '2025-04-12', amount: '$300' }
])
</script>

<style scoped>
/* Add any custom styling here if needed */
</style>
