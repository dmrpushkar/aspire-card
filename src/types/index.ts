import type { TRANSACTION_TYPES } from '../constants';

type TransactionType = (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES];

export interface Card {
  id: string;
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
  frozen: boolean;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  cardId: string;
  date: string;
  amount: number;
  type: TransactionType;
  merchant: string;
}
