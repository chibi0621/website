<template>
  <aside class="mb-2">
    <router-link to="/dashboard/login" class="managerLoginLink">
      管理者請點此登入
      <span class="material-symbols-outlined">
        account_circle
      </span>
    </router-link>
  </aside>
</template>

<script>
import '@/assets/user/component/managerLogin.scss';

export default {
  created() {
    console.log('manager login');
  },
};
</script>
