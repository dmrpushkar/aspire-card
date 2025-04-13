<template>
  <q-card flat>
    <q-card-section class="q-pa-none">
      <q-list>
        <TransactionItem
          v-for="(transaction, index) in transactionsData"
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
import TransactionItem from './TransactionItem.vue';
import megaphoneIcon from 'assets/transaction-icons/megaphone-icon.svg';
import amazonIcon from 'assets/transaction-icons/shop-icon.svg';
import refundIcon from 'assets/transaction-icons/flight-icon.svg';
import { computed } from 'vue';
import { useCardsStore } from 'stores/cards';
import { TRANSACTION_TYPES } from 'src/constants';
import type { TransactionDisplay, MerchantType } from 'src/types';

const cardsStore = useCardsStore();

const props = defineProps<{
  cardId: string;
}>();

const transactionsData = computed(() => {
  const res: TransactionDisplay[] = [];
  const data = cardsStore.getTransactions(props.cardId);
  data.forEach((transaction) => {
    res.push({
      id: transaction.id,
      cardId: transaction.cardId,
      date: new Date(transaction.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      amount: `${transaction.type === TRANSACTION_TYPES.CREDIT ? '+' : '-'}₹${transaction.amount.toFixed(2)}`,
      type: transaction.type,
      merchant: transaction.merchant,
      icon: iconMap[transaction.merchant],
      title: transaction.merchant,
      isCredit: transaction.type === TRANSACTION_TYPES.CREDIT,
      iconBackgroundColor: colorMap[transaction.merchant],
    });
  });
  return res;
});

const iconMap: Record<MerchantType, string> = {
  Swiggy: megaphoneIcon,
  Amazon: amazonIcon,
  Refund: refundIcon,
  Starbucks: refundIcon,
  Hamleys: refundIcon,
  CrowssWord: refundIcon,
  Ikea: amazonIcon,
  Apollo: refundIcon,
};

const colorMap: Record<MerchantType, string> = {
  Swiggy: '#FF2F2F',
  Amazon: '#01D167',
  Refund: '#0062FF',
  Starbucks: '#0062FF',
  Hamleys: '#0062FF',
  CrowssWord: '#0062FF',
  Ikea: '#01D167',
  Apollo: '#0062FF',
};

</script>
