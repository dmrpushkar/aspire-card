<template>
  <div class="debit-card" :style="{ backgroundColor }">
    <div class="card-header">
      <img :src="aspireLogo" alt="aspire-logo" class="aspire-logo" />
    </div>

    <div class="card-holder-name">
      {{ cardHolderName }}
    </div>

    <div class="card-number">
      <span v-for="(group, index) in cardNumberGroups" :key="index" class="number-group">
        {{ group }}
      </span>
    </div>

    <div class="card-details">
      <div class="thru">
        <div class="label">Thru:</div>
        <div class="value">{{ thruDate }}</div>
      </div>

      <div class="cvv">
        <div class="label">CVV:</div>
        <div class="value">{{ cvv }}</div>
      </div>
    </div>

    <div class="card-footer">
      <img :src="visaLogo" alt="visa-logo" class="visa-logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import aspireLogo from 'assets/aspire-logo-full.png';
import visaLogo from 'assets/visa-logo.svg';

interface Props {
  cardHolderName: string;
  cardNumber: string;
  thruDate: string;
  cvv: string;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: '#01D167'
});

const cardNumberGroups = computed(() => {
  return props.cardNumber.match(/.{1,4}/g) || [];
});
</script>

<style lang="scss" scoped>
.debit-card {
  width: 100%;
  height: 244px;
  border-radius: 15px;
  padding: 24px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.aspire-logo {
  height: 20px;
  filter: var(--white-color-filter);
}

.card-holder-name {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.card-number {
  display: flex;
  gap: 24px;
  font-size: 16px;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.card-details {
  display: flex;
  gap: 32px;
  font-size: 13px;
  margin-bottom: 20px;
}

.thru, .cvv {
  display: flex;
  gap: 10px;
}

.label {
  opacity: 0.5;
}

.card-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

.visa-logo {
  height: 20px;
}

@media (max-width: $mobile-breakpoint) {
  .debit-card {
    height: 220px;
    padding: 16px;
  }

  .card-header {
    margin-bottom: 16px;
  }

  .card-holder-name {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .card-number {
    gap: 16px;
    font-size: 14px;
    margin-bottom: 16px;
  }

  .card-details {
    gap: 24px;
    font-size: 12px;
    margin-bottom: 16px;
  }
}
</style>
