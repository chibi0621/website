<template>
  <div class="container-fluid">
    <div class="navbarBox">
      <a class="navbar-brand" href="#" aria-label="Href">
        <img class="logo" src="../assets/img/quatt.png" alt="">
      </a>
      <nav class="navbar navbar-expand-lg navBox" id="userNavbar">
        <button class="navbar-toggler border border-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#userNavbar" aria-controls="userNavbar"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse linkBox" id="userNavbar">
          <div class="navbar-nav navLink">
            <router-link to="/user/promotional_activity">NEWS</router-link>
            <router-link to="/user/product">PRODUCTS</router-link>
            <router-link to="/user/cart">CART</router-link>
            <router-link to="/user/about_chibi">COMPANY</router-link>
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
import '@/assets/dist/user/component/userNavbar.scss';
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
