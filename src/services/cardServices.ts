import type { Card, Transaction } from '../types';
import type { useCardsStore } from '../stores/cards';

const API_DELAYS = {
  GET_CARDS: 800,
  GET_TRANSACTIONS: 1000,
  ADD_CARD: 1500,
  SET_CARD_FREEZE: 600,
} as const;

export class CardService {
  constructor(private store: ReturnType<typeof useCardsStore>) {}

  private simulateApiCall(delay: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  async getTransactions(cardId: string): Promise<Transaction[]> {
    this.store.setLoader('getTransactions', true);
    try {
      await this.simulateApiCall(API_DELAYS.GET_TRANSACTIONS);
      return this.store.getTransactions(cardId);
    } finally {
      this.store.setLoader('getTransactions', false);
    }
  }

  async addCard(card: Card): Promise<void> {
    this.store.setLoader('addCard', true);
    try {
      await this.simulateApiCall(API_DELAYS.ADD_CARD);
      this.store.addCard(card);
    } finally {
      this.store.setLoader('addCard', false);
    }
  }

  async setCardFreeze(cardId: string, frozen: boolean): Promise<void> {
    console.log('Freeze action clicked', cardId, frozen);
    this.store.setLoader('setCardFreeze', true);
    try {
      await this.simulateApiCall(API_DELAYS.SET_CARD_FREEZE);
      this.store.setCardFreeze(cardId, frozen);
    } finally {
      this.store.setLoader('setCardFreeze', false);
    }
  }
}
