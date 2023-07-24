<template>
  <div class="alert alert-dismissible fade show alertBox" role="alert" ref="alert">
    <div class="iconBox">
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="#c12e3c"
      class="bi bi-exclamation-circle pb-1" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8
        0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
    </div>
    <div class="fs-1 mb-5">
      訂單未成立，請重新訂購
    </div>
    <div class="fs-5 mt-2 mb-5 text-dark">
      頁面將跳轉至購物車，點擊
      <button class="btnToCart text-decoration-underline text-primary" @click="toCart">
        此連結
      </button>
      立即跳轉或五秒後自動跳轉
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
    @click="toProductList">
    </button>
  </div>
</template>

<script>
import 'bootstrap/js/dist/alert';
import '@/assets/dist/user/orderFail.scss';

export default {
  methods: {
    toCart() {
      this.$router.push('/user/cart');
    },
  },
  mounted() {
    setTimeout(this.toCart, 5000);
  },
};
</script>
