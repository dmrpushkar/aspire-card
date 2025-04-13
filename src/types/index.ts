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

export type MerchantType = 'Swiggy' | 'Amazon' | 'Refund' | 'Hamleys' | 'Starbucks' | 'CrowssWord' | 'Ikea' | 'Apollo';

export interface Transaction {
  id: string;
  cardId: string;
  date: string;
  amount: number;
  type: TransactionType;
  merchant: MerchantType;
}

export interface TransactionDisplay extends Omit<Transaction, 'amount'> {
  icon: string;
  title: string;
  isCredit: boolean;
  iconBackgroundColor: string;
  amount: string;
}
