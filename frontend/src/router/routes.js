import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ClanDetails from '../components/ClanDetails.vue';
import Members from '../components/Members.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clan',
    name: 'ClanDetails',
    component: ClanDetails,
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