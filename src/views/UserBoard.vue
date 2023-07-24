<template>
  <UserNavbar></UserNavbar>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessage></ToastMessage>
      <router-view/>
    </div>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    ToastMessage, UserNavbar,
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
