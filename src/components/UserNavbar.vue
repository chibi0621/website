<template>
  <div class="container-fluid">
    <div class="navbarBox sticky-top">
      <a class="navbar-brand" href="#" aria-label="Href">
        <img class="logo" src="../assets/img/quatt.png" alt="">
      </a>
      <nav class="navbar-expand-lg navBox">
        <button class="navbar-toggler border border-0"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#userNavbar" aria-controls="userNavbar"
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
        <div class="collapse navbar-collapse linkBox" id="userNavbar">
          <div class="navbar-nav navLink">
            <router-link to="/user/promotional_activity">NEWS</router-link>
            <router-link to="/user/product">PRODUCTS</router-link>
            <router-link to="/user/cart">CART</router-link>
            <router-link to="/user/about_us">COMPANY</router-link>
            <router-link to="/user/store_location">STORE</router-link>
            <router-link to="/user/login">LOG IN</router-link>
            <router-link to="/" @click.prevent="logout">SIGN OUT</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import '@/assets/user/component/userNavbar.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

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
