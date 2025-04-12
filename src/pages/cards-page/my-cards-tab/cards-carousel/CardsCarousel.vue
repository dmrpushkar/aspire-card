<template>
  <div class="carousel-container">
    <q-carousel
      swipeable
      animated
      control-type="flat"
      :navigation="false"
      class="text-black"
      v-model="selectedCardIndex"
    >
      <q-carousel-slide v-for="(card, index) in cards" :key="index" :name="index">
        <div class="show-number-row">
          <button class="show-number-btn">
            <img :src="eyeIcon" alt="show card number" />
            <span>Show card number</span>
          </button>
        </div>
        <Card
          :cardHolderName="card.holderName"
          :cardNumber="card.number"
          :thruDate="card.expiry"
          :cvv="card.cvv"
          :backgroundColor="card.type === 'Visa' ? '#01D167' : '#01D167'"
        />
      </q-carousel-slide>
    </q-carousel>
    <div class="navigation-dots">
      <div
        v-for="(_, index) in cards"
        :key="index"
        class="dot"
        :class="{ active: selectedCardIndex === index }"
        @click="selectedCardIndex = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import eyeIcon from 'assets/eye-icon.svg';
import Card from './Card.vue';

const selectedCardIndex = ref(0);

const cards = ref([
  {
    type: 'Visa',
    number: '**** **** **** 1234',
    expiry: '12/26',
    holderName: 'Mark Henry',
    cvv: '***',
  },
  {
    type: 'MasterCard',
    number: '**** **** **** 5678',
    expiry: '08/25',
    holderName: 'John Doe',
    cvv: '***',
  },
]);
</script>

<style lang="scss" scoped>
.show-number-row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.show-number-btn {
  background: transparent !important;
  padding: 0 !important;
  border: none !important;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  img {
    width: 16px;
    height: 16px;
  }
}

.carousel-container {
  position: relative;
  margin-bottom: 40px;
}

.q-carousel {
  height: auto;
}

.navigation-dots {
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 1;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #E5E9F2;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      width: 16px;
      background-color: #01D167;
    }
  }
}

@media (max-width: $mobile-breakpoint) {
  .q-carousel {
    height: auto;
    background-color: transparent;
  }
  .q-carousel__slide {
    padding: 8px;
  }

  .show-number-row {
    margin-bottom: -16px;
  }

  .show-number-btn {
    background: white !important;
    border-radius: 8px;
    padding: 8px 16px 20px !important;
    cursor: pointer;
    display: inline-flex;
    align-items: flex-start;

    span {
      color: #01D167;
      font-size: 12px;
      font-weight: 500;
      padding-top: 2px;
    }

    img {
      width: 14px;
      height: 14px;
      margin-top: 2px;
    }
  }
}
</style>
