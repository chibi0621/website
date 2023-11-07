<template>
  <UserNavbar></UserNavbar>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessage></ToastMessage>
      <router-view/>
      <ManagerLogin></ManagerLogin>
    </div>
    <UserFooter></UserFooter>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import UserFooter from '@/components/UserFooter.vue';
import ManagerLogin from '@/components/ManagerLogin.vue';
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    ToastMessage, UserNavbar, UserFooter, ManagerLogin,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>
