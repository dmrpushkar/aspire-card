import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from 'src/constants';
import HomePage from '../pages/home-page/index.vue';
import CardsPage from '../pages/cards-page/index.vue';
import PaymentsPage from '../pages/home-page/index.vue';
import CreditPage from '../pages/home-page/index.vue';
import SettingsPage from '../pages/home-page/index.vue';

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
