<template>
  <div class="container mt-5">
    <form class="row" @submit.prevent="signIn">
      <div class="col-md-8">
        <h1 class="fs-3 mb-3 titleText">管理者登入</h1>
        <div class="mb-2 p-3">
          <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="管理者帳號"
          requiredsudo
          v-model="user.username"
          aria-label="Input"
          />
        </div>
        <div class="mb-2 p-3">
          <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="管理者密碼"
          required
          v-model="user.password"
          aria-label="Input"
          />
        </div>
        <div class="mt-4">
          <button class="btn btn-lg btn-block rounded-pill btnColor" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import '@/assets/dist/dashboard/loginPage.scss';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken = ${token}; expires = ${new Date(expired)}`;
          this.$router.push('/dashboard/');
        }
      });
    },
  },
};
</script>
