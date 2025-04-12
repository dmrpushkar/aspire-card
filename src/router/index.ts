import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from 'src/constants';
import HomePage from '../pages/home-page';
import CardsPage from '../pages/cards-page';
import PaymentsPage from '../pages/home-page';
import CreditPage from '../pages/home-page';
import SettingsPage from '../pages/home-page';

export const routes = [
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.CARDS,
    component: CardsPage,
  },
  {
    path: ROUTES.PAYMENTS,
    component: PaymentsPage,
  },
  {
    path: ROUTES.CREDIT,
    component: CreditPage,
  },
  {
    path: ROUTES.SETTINGS,
    component: SettingsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
