<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg dashboardBox">
      <a class="navbar-brand mb-5 navBrand" href="/dashboard" aria-label="Href">
        <img class="logo" src="../assets/img/quatt.png" alt="">
        <p class="navText">後台管理系統</p>
      </a>
      <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse"
      data-bs-target="#dashboardNavbar" aria-controls="dashboardNavbar"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse border border-0 mb-3" id="dashboardNavbar">
        <div class="navbar-nav link">
          <router-link to="/dashboard/product" class="nav-link">新增產品</router-link>
          <router-link to="/dashboard/order" class="nav-link">查看訂單</router-link>
          <router-link to="/dashboard/coupon" class="nav-link">新增優惠券</router-link>
          <router-link to="/dashboard/login" class="nav-link">登入</router-link>
          <router-link to="/" @click.prevent="logout" class="nav-link">登出</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import '@/assets/dist/dashboard/dashBoardNavbar.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

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
