import { defineStore, acceptHMRUpdate } from 'pinia';
import type { Card, Transaction } from '../types';
import { cards as mockCards, transactions as mockTransactions } from './initialData';

interface CardState {
  cards: Card[];
  transactions: Transaction[];
  loading: {
    initialize: boolean;
    getCards: boolean;
    getTransactions: boolean;
    addCard: boolean;
    setCardFreeze: boolean;
  };
  error: string | null;
}

export const useCardsStore = defineStore('cards', {
  state: (): CardState => ({
    cards: mockCards,
    transactions: mockTransactions,
    loading: {
      initialize: false,
      getCards: false,
      getTransactions: false,
      addCard: false,
      setCardFreeze: false,
    },
    error: null,
  }),
  getters: {
    getCards: (state): Card[] => state.cards,

    getCardById:
      (state) =>
      (cardId: string): Card | undefined =>
        state.cards.find((card) => card.id === cardId),

    getTotalBalance: (state): number => state.cards.reduce((total, card) => total + card.balance, 0),

    getTransactions:
      (state) =>
      (cardId: string): Transaction[] =>
        state.transactions.filter((transaction) => transaction.cardId === cardId),

    getTransactionsCount: (state): number => state.transactions.length,

    isLoading: (state): boolean => Object.values(state.loading).some((value) => value),
  },
  actions: {
      addCard(card: Card) {
        try {
          this.setLoader('addCard', true);
          this.cards = [...this.cards, card];
          this.error = null;
        } catch (err: unknown) {
          this.error = `Failed to add card: ${err instanceof Error ? err.message : 'Unknown error'}`;
        } finally {
          this.setLoader('addCard', false);
        }
      },

      setCardFreeze(cardId: string, frozen: boolean) {
        try {
          this.setLoader('setCardFreeze', true);
          this.cards = this.cards.map((card) => (card.id === cardId ? { ...card, frozen } : card));
          this.error = null;
        } catch (err: unknown) {
          this.error = `Failed to freeze card: ${err instanceof Error ? err.message : 'Unknown error'}`;
        } finally {
          this.setLoader('setCardFreeze', false);
        }
      },

      setLoader(type: keyof CardState['loading'], value: boolean) {
        this.loading[type] = value;
      },

      reset() {
        this.cards = mockCards;
        this.transactions = mockTransactions;
        this.error = null;
        Object.keys(this.loading).forEach((key) => {
          this.loading[key as keyof CardState['loading']] = false;
        });
      },
    },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCardsStore, import.meta.hot));
}
