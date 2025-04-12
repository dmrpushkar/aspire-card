<template>
  <q-card flat class="q-pa-md">
    <q-card-section>
      <q-item-label class="text-bold text-subtitle2">Recent Transactions</q-item-label>
    </q-card-section>

    <q-card-section class="q-pa-none">
      <q-list separator>
        <TransactionItem
          v-for="(transaction, index) in transactions"
          :key="index"
          :icon="transaction.icon"
          :title="transaction.title"
          :subtitle="transaction.subtitle"
          :amount="transaction.amount"
          :is-credit="transaction.isCredit"
        />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import TransactionItem from './TransactionItem.vue'
import netflixIcon from 'assets/transaction-icons/megaphone-icon.svg'
import amazonIcon from 'assets/transaction-icons/shop-icon.svg'
import refundIcon from 'assets/transaction-icons/flight-icon.svg'

const transactions = [
  {
    icon: netflixIcon,
    title: 'Netflix',
    subtitle: 'Subscription • Apr 10',
    amount: '-₹499.00',
    isCredit: false,
  },
  {
    icon: amazonIcon,
    title: 'Amazon',
    subtitle: 'Shopping • Apr 9',
    amount: '-₹1,299.00',
    isCredit: false,
  },
  {
    icon: refundIcon,
    title: 'Refund',
    subtitle: 'Refund • Apr 8',
    amount: '+₹250.00',
    isCredit: true,
  },
]
</script>
