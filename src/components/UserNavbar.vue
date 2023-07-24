<template>
  <nav class="navbar navbar-expand-xl navbarBox">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logoText" src="../assets/img/textDark2.png" alt="...">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav link ms-5">
          <router-link to="/user/product">商品</router-link>|
          <router-link to="/user/cart">購物車</router-link>|
          <router-link to="/user/order">訂單</router-link>|
          <router-link to="/user/login">登入</router-link>|
          <router-link to="/" @click.prevent="logout">登出</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import '@/assets/dist/user/userNavbar.scss';

export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
