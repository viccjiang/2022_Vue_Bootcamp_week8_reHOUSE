import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/UserAbout.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/UserProducts.vue'),
      },
      {
        path: 'product/:id',
        name: 'product/:id',
        component: () => import('../views/UserProductDetail.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
