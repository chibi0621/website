<template>
  <div class="container-fluid">
    <div class="dashboardNavBox sticky-top">
      <a class="navbar-brand navBrand" href="/dashboard" aria-label="Href">
        <img class="logo" src="../assets/img/quatt.png" alt="">
        <p class="navText">後台管理系統</p>
      </a>
      <nav class="navbar-expand-lg dashboardBox">
        <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#dashboardNavbar" aria-controls="dashboardNavbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggleIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
            fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5
              .5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0
              -4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </span>
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
