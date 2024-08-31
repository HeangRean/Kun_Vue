import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/News',
      name: 'News',
      component: () => import('../views/Latest_News.vue'),
    },
    {
      path: '/Details',
      name: 'Details',
      component: () => import('../views/DetailsView.vue'),
    },
    {
      path: '/DetailsView1',
      name: 'DetailsView1',
      component: () => import('../views/DetailsView1.vue'),
    },
    {
      path: '/AplicationWorkView',
      name: 'AplicationWorkView',
      component: () => import('../views/AplicationWorkView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/cms-dashboard',
      name: 'CmsDashboard',
      // Lazy-loaded when the route is visited
      component: () => import('../views/CmsDashboard.vue'),
    },
    {
      path: '/admin-dashboard',
      name: 'AdminDashboard',
      // Lazy-loaded when the route is visited
      component: () => import('../views/AdminDashboard.vue'),
    },
  ],
});

export default router;
