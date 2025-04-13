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
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category?: string;
  merchant?: string;
}
