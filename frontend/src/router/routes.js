import { createRouter, createWebHistory } from 'vue-router';
import ClanDetails from '../components/ClanDetails.vue';
import Members from '../components/Members.vue';
import NotFound from '../components/NotFound.vue';
import ClanWarHistory from '../components/ClanWarHistory.vue';
import CurrentWar from '../components/CurrentWar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ClanDetails,
  },
  {
    path: '/currentWar',
    name: 'CurrentWar',
    component: CurrentWar,
  },
  {
    path: '/history',
    name: 'ClanWarHistory',
    component: ClanWarHistory,
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
  },
  {
    path: '/:pathMatch(.*)*', // Wildcard für ungültige Routen
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;