import HomeIcon from '../assets/home-icon.svg';
import CardsIcon from '../assets/cards-icon.svg';
import PaymentsIcon from '../assets/payments-icon.png';
import CreditIcon from '../assets/credit-icon.png';
import SettingsIcon from '../assets/settings-icon.png';

export const ROUTES = {
  HOME: '/',
  CARDS: '/cards',
  PAYMENTS: '/payments',
  CREDIT: '/credit',
  SETTINGS: '/settings',
};

export const NAVBAR_ICONS = {
  HOME: HomeIcon,
  CARDS: CardsIcon,
  PAYMENTS: PaymentsIcon,
  CREDIT: CreditIcon,
  SETTINGS: SettingsIcon,
};

export const APP_CONFIG = {
  APP_NAME: 'Aspire Card',
  MOBILE_BREAKPOINT: 768,
};

export const MESSAGES = {
  ERROR: 'Something went wrong!',
  SUCCESS: 'Operation completed successfully!',
};

export const NAV_ITEMS = [
  { name: 'Home', path: ROUTES.HOME, icon: NAVBAR_ICONS.HOME },
  { name: 'Cards', path: ROUTES.CARDS, icon: NAVBAR_ICONS.CARDS },
  { name: 'Payments', path: ROUTES.PAYMENTS, icon: NAVBAR_ICONS.PAYMENTS },
  { name: 'Credit', path: ROUTES.CREDIT, icon: NAVBAR_ICONS.CREDIT },
  { name: 'Settings', path: ROUTES.SETTINGS, icon: NAVBAR_ICONS.SETTINGS },
];

export const TRANSACTION_TYPES = {
  CREDIT: 'credit',
  DEBIT: 'debit',
} as const;