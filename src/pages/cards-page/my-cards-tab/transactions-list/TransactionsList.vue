<template>
  <q-card flat>
    <q-card-section class="q-pa-none">
      <q-list>
        <TransactionItem
          v-for="(transaction, index) in transactions"
          :key="index"
          :icon="transaction.icon"
          :title="transaction.title"
          :date="transaction.date"
          :amount="transaction.amount"
          :is-credit="transaction.isCredit"
          :icon-background-color="transaction.iconBackgroundColor"
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
    date: 'Apr 10, 2025',
    amount: '-₹499.00',
    isCredit: false,
    iconBackgroundColor: '#FF2F2F'
  },
  {
    icon: amazonIcon,
    title: 'Amazon',
    date: 'Apr 9, 2025',
    amount: '-₹1,299.00',
    isCredit: false,
    iconBackgroundColor: '#01D167'
  },
  {
    icon: refundIcon,
    title: 'Refund',
    date: 'Apr 8, 2025',
    amount: '+₹250.00',
    isCredit: true,
    iconBackgroundColor: '#0062FF'
  },
]
</script>
