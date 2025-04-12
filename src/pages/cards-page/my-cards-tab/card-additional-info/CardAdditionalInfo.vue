<template>
  <div class="card-details">
    <q-expansion-item
      header-class="accordion-header"
      expand-icon-class="expand-icon"
    >
      <template #header>
        <div class="header-content">
          <img :src="cardDetailsIcon" alt="Card details" class="q-icon" />
          <div>Card details</div>
        </div>
      </template>
      <div class="content-wrapper">
        This is where card details will be shown
      </div>
    </q-expansion-item>

    <q-expansion-item
      header-class="accordion-header"
      expand-icon-class="expand-icon"
      default-opened
    >
      <template #header>
        <div class="header-content">
          <img :src="recentTransactionsIcon" alt="Recent transactions" class="q-icon" />
          <div>Recent transactions</div>
        </div>
      </template>
      <div class="content-wrapper">
        <TransactionList />
      </div>
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import TransactionList from '../transactions-list';
import cardDetailsIcon from 'assets/card-details-icon.svg';
import recentTransactionsIcon from 'assets/recent-transactions-icon.svg';
</script>

<style lang="scss" scoped>
.card-details {
  border-radius: 12px;
  padding: 24px;

  :deep(.q-expansion-item) {
    background-color: var(--accordion-background-color);
    border-radius: 12px;
  }

  :deep(.q-expansion-item + .q-expansion-item) {
    margin-top: 24px;
  }

  :deep(.accordion-header) {
    color: var(--dark-blue-color);
    font-size: 16px;
    font-weight: 500;
    min-height: 56px;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;

    img.q-icon {
      width: 24px;
      height: 24px;
    }
  }

  :deep(.expand-icon) {
    color: var(--dark-blue-color);
  }

  :deep(.q-expansion-item__content) {
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 1px solid #E5E9F2;
  }

  .content-wrapper {
    padding: 16px 24px;
    color: var(--dark-blue-color);
  }
}
</style>
