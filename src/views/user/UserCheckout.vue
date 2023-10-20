<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="my-5 row justify-content-center">
    <h4 class="fs-4 mt-4 mb-5 checkoutTitle">
      <span class="p-3">Order Summary 訂單資訊 </span>
      <hr>
    </h4>
    <h5 class="orderSuccess">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
      class="bi bi-check-all" viewBox="0 0 16 16">
        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324
        8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92
        5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477
        9.417l-.485-.486-.943 1.179z"/>
      </svg>
      訂單已成立！
    </h5>
    <form class="col-md-6" @submit.prevent="payOrder">
      <h6 class="fs-4 mb-5 text-center checkoutH6">訂單內容</h6>
      <table class="table align-middle mb-5 table-hover">
        <thead height="28px">
        <th class="fontPadding">品名</th>
        <th class="fontPadding" width="90px">數量</th>
        <th class="fontPadding" width="90px">單價</th>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td class="align-middle">{{ item.product.title }}</td>
          <td class="align-middle"> {{ item.qty }}/{{ item.product.unit }}</td>
          <td class="align-middle text-right">{{ item.final_total }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2" class="fw-bold">總計</td>
          <td class="text-right fw-bold">{{ order.total }}</td>
        </tr>
        </tfoot>
      </table>
      <h6 class="fs-4 mb-5 text-center checkoutH6">訂購資訊</h6>
      <table class="table align-middle mb-5 table-hover">
        <tbody>
        <tr>
          <th width="100">Email</th>
          <td>{{ order.user.email }}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td>{{ order.user.name }}</td>
        </tr>
        <tr>
          <th>收件人電話</th>
          <td>{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{ order.user.address }}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>
            <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="payBtn">下一步：確認付款</button>
      </div>
    </form>
  </div>
</template>

<script>
import '@/assets/dist/user/userCheckout.scss';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.order = response.data.order;
          console.log(response);
          vm.isLoading = false;
        }
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        console.log(response);
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    const vm = this;
    vm.orderId = vm.$route.params.orderId;
    vm.getOrder();
    console.log(vm.orderId);
  },
};
</script>
