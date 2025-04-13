import type { Card, Transaction } from '../types';
import { TRANSACTION_TYPES } from '../constants';
import { v4 as uuidv4 } from 'uuid';

const cards: Card[] = [
  {
    id: uuidv4(),
    cardNumber: '4111111111111111',
    cardholderName: 'Richard Hammond',
    expiryDate: '12/25',
    cvv: '123',
    balance: 5000,
    frozen: false,
    currency: 'USD',
  },
  {
    id: uuidv4(),
    cardNumber: '4111111160401133',
    cardholderName: 'James May',
    expiryDate: '01/29',
    cvv: '415',
    balance: 15000,
    frozen: false,
    currency: 'USD',
  },
  {
    id: uuidv4(),
    cardNumber: '4111771160401165',
    cardholderName: 'James May',
    expiryDate: '06/31',
    cvv: '743',
    balance: 1000,
    frozen: false,
    currency: 'USD',
  },
];

const transactions: Transaction[] = [
  {
    id: uuidv4(),
    cardId: cards[0]?.id ?? '',
    amount: 120,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Swiggy',
    date: '2025-04-01T10:00:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[1]?.id ?? '',
    amount: 250,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Hamleys',
    date: '2025-04-02T12:30:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[2]?.id ?? '',
    amount: 90,
    type: TRANSACTION_TYPES.CREDIT,
    merchant: 'Amazon',
    date: '2025-04-03T09:45:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[0]?.id ?? '',
    amount: 180,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Starbucks',
    date: '2025-04-04T19:15:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[2]?.id ?? '',
    amount: 75,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Starbucks',
    date: '2025-04-05T08:20:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[0]?.id ?? '',
    amount: 300,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'CrowssWord',
    date: '2025-04-06T15:40:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[1]?.id ?? '',
    amount: 220,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Swiggy',
    date: '2025-04-07T11:10:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[0]?.id ?? '',
    amount: 60,
    type: TRANSACTION_TYPES.CREDIT,
    merchant: 'Swiggy',
    date: '2025-04-08T13:25:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[1]?.id ?? '',
    amount: 400,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Ikea',
    date: '2025-04-09T17:50:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[0]?.id ?? '',
    amount: 150,
    type: TRANSACTION_TYPES.DEBIT,
    merchant: 'Apollo',
    date: '2025-04-10T14:05:00Z',
  },
  {
    id: uuidv4(),
    cardId: cards[1]?.id ?? '',
    amount: 100,
    type: TRANSACTION_TYPES.CREDIT,
    merchant: 'Swiggy',
    date: '2025-04-11T10:00:00Z',
  },
];

export { cards, transactions };
