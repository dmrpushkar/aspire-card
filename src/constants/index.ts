export const ROUTES = {
  HOME: '/',
  CARDS: '/cards',
  PAYMENTS: '/payments',
  CREDIT: '/credit',
  SETTINGS: '/settings',
};

export const NAVBAR_ICONS = {
  HOME: '🏠',
  CARDS: '💳',
  PAYMENTS: '💰',
  CREDIT: '💳',
  SETTINGS: '⚙️',
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
