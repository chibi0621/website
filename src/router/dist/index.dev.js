"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: '/',
  name: 'home',
  component: _HomeView["default"]
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/AboutView.vue'));
    });
  }
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/DashBoard.vue'));
    });
  },
  children: [{
    path: 'login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/LoginPage.vue'));
      });
    }
  }, {
    path: 'products',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/ProductList.vue'));
      });
    }
  }, {
    path: 'orders',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/OrderList.vue'));
      });
    }
  }, {
    path: 'coupons',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/CouponList.vue'));
      });
    }
  }]
}, {
  path: '/user',
  name: 'user',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/UserBoard.vue'));
    });
  },
  children: [{
    path: 'product',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserProductList.vue'));
      });
    }
  }, {
    path: 'cart',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserCart.vue'));
      });
    }
  }, {
    path: 'product/:productId',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserProduct.vue'));
      });
    }
  }, {
    path: 'order',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserOrder.vue'));
      });
    }
  }, {
    path: 'login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserLogin.vue'));
      });
    }
  }, {
    path: 'order/fail',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/OrderFail.vue'));
      });
    }
  }, {
    path: 'checkout/:orderId',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserCheckout.vue'));
      });
    }
  }, {
    path: 'contact',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/UserContact.vue'));
      });
    }
  }]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;