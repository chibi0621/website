<template>
  <div class="mt-5">
    <form class="row d-flex" @submit.prevent="signIn">
      <div class="col-md-6 boxLeft">
        <h1 class="login">登入帳戶</h1>
        <div class="mb-3 loginInput">
          <input type="email" id="inputEmail" class="form-control inputLength"
          placeholder="輸入電子郵件" requiredsudo v-model="user.username"
          aria-label="Input" />
        </div>
        <div class="mb-3 loginInput">
          <input type="password" id="inputPassword" class="form-control inputLength"
          placeholder="輸入密碼" required v-model="user.password"
          aria-label="Input" />
        </div>
        <div class="mb-3 loginCheckbox">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"
          aria-label="Check">
          <p>記住我</p>
        </div>
        <div class="loginButton">
          <button class="btn btn-lg btn-block rounded-pill btnBig btnColor" type="submit">
            Login
          </button>
        </div>
        <div class="List">
          <ul class="qBox">
            <li>
              <a class="boxLink" href="">忘記帳號</a>
            </li>
            <li>
              ｜
            </li>
            <li>
              <a class="boxLink" href="">忘記密碼</a>
            </li>
            <li>
              ｜
            </li>
            <li>
              <a class="boxLink" href="">其他問題</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hrBox">
        <hr/>
      </div>
      <div class="col-md-6 allRightBox">
        <h1 class="sign">註冊官網會員</h1>
        <div class="boxRight">
          <h3 class="member">已有實體卡會員，綁定會員帳號</h3>
          <div class="mb-3">
            <button class="btn btn-lg btn-block btnColor btnSmall rounded-pill" type="submit">
              綁定會員帳號
            </button>
          </div>
        </div>
        <div class="boxRight">
          <h3 class="member">無實體卡會員，註冊會員帳號</h3>
          <div class="mb-3">
            <button class="btn btn-lg btn-block btnColorLight btnSmall rounded-pill" type="submit">
              註冊會員帳號
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import '@/assets/dist/user/userLogin.scss';

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
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
