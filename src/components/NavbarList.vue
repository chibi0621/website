<template>
  <nav class="navbar navbar-expand-xl dashboardBox">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img class="logoText" src="../assets/img/text.png" alt="...">
        <p class="text-end fst-italic navbarText">後台管理系統</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav link ms-5">
          <router-link to="/dashboard/products" class="nav-link">產品上架</router-link>|
          <router-link to="/dashboard/orders" class="nav-link">查看訂單</router-link>|
          <router-link to="/dashboard/coupons" class="nav-link">新增優惠券</router-link>|
          <router-link to="/" @click.prevent="logout" class="nav-link">登出</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import '@/assets/dist/dashboard/dashBoardNavbar.scss';

export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/dashboard/login');
        }
      });
    },
  },
};
</script>
