import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from 'src/constants';
import HomePage from '../pages/HomePage.vue';
import CardsPage from '../pages/CardsPage.vue';
import PaymentsPage from '../pages/HomePage.vue';
import CreditPage from '../pages/HomePage.vue';
import SettingsPage from '../pages/HomePage.vue';

export const routes = [
  {
    path: ROUTES.HOME,
    name: 'Home',
    component: HomePage,
    meta: { icon: '🏠' },
  },
  {
    path: ROUTES.CARDS,
    name: 'Cards',
    component: CardsPage,
    meta: { icon: '💳' },
  },
  {
    path: ROUTES.PAYMENTS,
    name: 'Payments',
    component: PaymentsPage,
    meta: { icon: '💸' },
  },
  {
    path: ROUTES.CREDIT,
    name: 'Credit',
    component: CreditPage,
    meta: { icon: '💳' },
  },
  {
    path: ROUTES.SETTINGS,
    name: 'Settings',
    component: SettingsPage,
    meta: { icon: '⚙️' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
