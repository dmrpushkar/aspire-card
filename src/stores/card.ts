import { defineStore } from 'pinia';
import type { Card, Transaction } from '../types';
import { cards as mockCards, transactions as mockTransactions } from './initialData';

interface CardState {
  cards: Card[];
  transactions: Transaction[];
  loading: {
    getCards: boolean;
    getTransactions: boolean;
    addCard: boolean;
  };
  error: string | null;
}

export const useCardStore = defineStore('card', {
  state: (): CardState => ({
    cards: [],
    transactions: [],
    loading: {
      getCards: false,
      getTransactions: false,
      addCard: false,
    },
    error: null,
  }),

  getters: {
    getCards: (state): Card[] => {
      return state.cards;
    },
    getTransactions: (state) => (cardId: string): Transaction[] => {
      return state.transactions.filter((transaction) => transaction.cardId === cardId);
    },
  },

  actions: {
    setLoader(type: 'getCards' | 'getTransactions' | 'addCard', value: boolean) {
      this.loading[type] = value;
    },
    addCard(card: Card) {
      try {
        this.cards = [...this.cards, card];
        this.error = null;
      } catch (err: unknown) {
        this.error = `Failed to add card: ${err instanceof Error ? err.message : 'Unknown error'}`;
      }
    },
    initializeStore() {
      this.cards = mockCards;
      this.transactions = mockTransactions;
      this.error = null;
    },

    setCardFreeze(cardId: string, frozen: boolean) {
      try {
        this.cards = this.cards.map((card) =>
          card.id === cardId ? { ...card, frozen } : card
        );
        this.error = null;
      } catch (err: unknown) {
        this.error = `Failed to freeze card: ${err instanceof Error ? err.message : 'Unknown error'}`;
      }
    },
  },
});
