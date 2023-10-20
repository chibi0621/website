<template>
  <div class="container mt-5">
    <form class="row" @submit.prevent="signIn">
      <div class="col-md-6">
        <h2 class="mb-3 memberLogin text-center">管理者登入</h2>
        <div class="mb-2 p-3">
          <input
          type="email"
          id="administratorEmail"
          class="memberInput"
          placeholder="請輸入帳號"
          requiredsudo
          v-model="user.username"
          aria-label="Input"
          />
        </div>
        <div class="mb-2 p-3">
          <input
          type="password"
          id="administratorPassword"
          class="memberInput"
          placeholder="請輸入密碼"
          required
          v-model="user.password"
          aria-label="Input"
          />
        </div>
        <div class="mt-4 text-center">
          <button class="loginBtn" type="submit">
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
          this.$httpMessageState(res, '您已登入');
          setTimeout(() => {
            this.$router.push('/dashboard/');
          }, '4000');
        }
      });
    },
  },
};
</script>
