import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../views/LoginPage.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/ProductList.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrderList.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponList.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/UserProductList.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/UserOrder.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/UserLogin.vue'),
      },
      {
        path: 'order/fail',
        component: () => import('../views/OrderFail.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue'),
      },
      {
        path: 'contact',
        component: () => import('../views/UserContact.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
