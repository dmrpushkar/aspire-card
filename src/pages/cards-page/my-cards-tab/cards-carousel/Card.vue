<template>
  <div class="debit-card" :class="{ 'frozen': frozen }" :style="{ backgroundColor }">
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
  hideNumber?: boolean;
  frozen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  backgroundColor: '#01D167',
  hideNumber: false,
  frozen: false,
});

const maskedCardNumber = computed(() => {
  if (!props.hideNumber) return props.cardNumber;
  const lastFourDigits = props.cardNumber.slice(-4);
  const maskedPart = props.cardNumber.slice(0, -4).replace(/\d/g, '●');
  return maskedPart + lastFourDigits;
});

const cardNumberGroups = computed(() => {
  return maskedCardNumber.value.match(/.{1,4}/g) || [];
});
</script>

<style lang="scss" scoped>
.debit-card {
  width: 100%;
  aspect-ratio: 1.6;
  transition: all 0.3s ease;

  &.frozen {
    filter: grayscale(0.8) brightness(0.8);
    cursor: not-allowed;
    position: relative;

    &::after {
      content: 'FROZEN';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      font-size: 24px;
      font-weight: bold;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
      letter-spacing: 4px;
    }
  }

  @media (min-width: $mobile-breakpoint) {
    max-width: 414px;
    margin: 0 auto;
  }
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

.thru,
.cvv {
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
    font-size: 14px;
    letter-spacing: 4px;
    color: white;
    margin: 24px 0;
    font-family: 'Courier New', monospace;
    font-variant-numeric: tabular-nums;
    display: flex;
    gap: 8px;

    span {
      min-width: 10px;
      text-align: center;
    }
  }

  .card-details {
    gap: 24px;
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>
