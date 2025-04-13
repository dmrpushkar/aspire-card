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

    > .q-focusable {
      margin-left: auto;
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;

    img.q-icon {
      width: 20px;
      height: 20px;
    }
  }

  :deep(.q-item__section--side > .q-icon) {
    font-size: 16px !important;
  }

  :deep(.expand-icon) {
    color: var(--dark-blue-color);
    background-color: #E5E9F2;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  :deep(.q-expansion-item__content) {
    background-color: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid #E5E9F2;
  }

  .content-wrapper {
    padding: 16px 16px;
    color: var(--dark-blue-color);
  }
}

@media (max-width: $mobile-breakpoint) {
  .card-details {
    padding: 8px;
  }
}
</style>
