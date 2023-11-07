import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/DashBoard.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../views/dashboard/LoginPage.vue'),
      },
      {
        path: 'product',
        component: () => import('../views/dashboard/ProductList.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/OrderList.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/CouponList.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/UserBoard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/user/UserProductList.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/user/UserCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/user/UserProduct.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/user/UserOrder.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/user/UserLogin.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/user/UserCheckout.vue'),
      },
      {
        path: 'store_location',
        component: () => import('../views/user/UserStoreLocation.vue'),
      },
      {
        path: 'promotional_activity',
        component: () => import('../views/user/UserPromotional.vue'),
      },
      {
        path: 'about_us',
        component: () => import('../views/user/AboutChibi.vue'),
      },
      {
        path: 'contact_us',
        component: () => import('../views/user/UserContact.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
