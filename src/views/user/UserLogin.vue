<template>
  <div>
    <h4 class="fs-4 loginTitle">
      <span class="p-3">Log in / Sing up &nbsp; 登入 / 註冊</span>
      <hr>
    </h4>
    <form class="row formBox" @submit.prevent="signIn">
      <div class="col-1"></div>
      <div class="col-md-5 boxLeft">
        <h5 class="login">登入帳戶</h5>
        <div class="loginInputBox">
          <input type="email" id="userEmail" class="loginInput"
          placeholder="輸入電子郵件" requiredsudo v-model="user.username"
          aria-label="Input" />
          <input type="password" id="userPassword" class="loginInput"
          placeholder="輸入密碼" required v-model="user.password"
          aria-label="Input" />
        </div>
        <div class="loginCheckboxBox">
          <input type="checkbox" class="loginCheckbox" id="rememberMeCheckbox"
          aria-label="Check">
          <p>記住我</p>
        </div>
        <div class="loginBtnBox">
          <button class="loginBtn" type="submit">
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
      <div class="col-md-5 allRightBox">
        <h5 class="sign">註冊官網會員</h5>
        <div class="boxRight">
          <h6 class="member">已有實體卡會員，綁定會員帳號</h6>
          <button class="submitBtn" type="submit">
            綁定會員帳號
          </button>
        </div>
        <div class="boxRight">
          <h6 class="member">無實體卡會員，註冊會員帳號</h6>
          <button class="submitBtn" type="submit">
            註冊會員帳號
          </button>
        </div>
      </div>
      <div class="col-1"></div>
    </form>
  </div>
</template>

<script>
import '@/assets/user/userLogin.scss';

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
            this.$router.push('/');
          }, '4000');
        }
      });
    },
  },
};
</script>
