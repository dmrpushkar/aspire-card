<template>
  <div class="transaction-item">
    <div class="row items-center no-wrap">
      <div class="icon-wrapper" :style="{ backgroundColor: iconBackgroundColor + '19' }">
        <img :src="icon" :alt="title" class="transaction-icon" />
      </div>
      <div class="transaction-details col">
        <div class="title">{{ title }}</div>
        <div class="date">{{ date }}</div>
      </div>
      <div class="amount" :class="amountClass">{{ amount }}</div>
    </div>
    <div class="row transaction-type">
      <div class="col offset-icon">
        <div class="type-label">
          <div class="pill-icon">
            <img :src="cardIcon" alt="Card" />
          </div>
          <span>{{ isCredit ? 'Refund on debit card' : 'Charged to debit card' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import cardIcon from 'assets/cards-icon.svg'

interface Props {
  icon: string
  title: string
  date: string
  amount: string
  isCredit?: boolean
  iconBackgroundColor: string
}

const props = defineProps<Props>()

const amountClass = computed(() =>
  props.isCredit ? 'credit' : 'debit'
)
</script>

<style lang="scss" scoped>
.transaction-item {
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #E5E9F2;
  }
  .row {
    width: 100%;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;

    .transaction-icon {
      width: 24px;
      height: 24px;
    }
  }

  .transaction-details {
    .title {
      font-weight: 600;
      font-size: 14px;
      color: black;
      line-height: 1.2;
    }

    .date {
      font-size: 13px;
      color: var(--gray-text-color);
      margin-top: 4px;
    }
  }

  .amount {
    font-size: 14px;
    font-weight: 600;

    &.credit {
      color: var(--primary-color);
    }

    &.debit {
      color: black;
    }
  }

  .transaction-type {
    margin-top: 8px;
  }

  .offset-icon {
    padding-left: 60px;
  }

  .type-label {
    color: var(--dark-blue-color);
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;

    .pill-icon {
      background-color: var(--dark-blue-color);
      border-radius: 12px;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 10px;
        filter: brightness(0) invert(1);
      }
    }
  }
}
</style>
