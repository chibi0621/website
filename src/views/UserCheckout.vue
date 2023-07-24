<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <h1 class="orderSuccess">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
        class="bi bi-check-all" viewBox="0 0 16 16">
          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324
          8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92
          5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477
          9.417l-.485-.486-.943 1.179z"/>
        </svg>
        訂單已成立！
      </h1>
      <h2 class="orderBox">訂單內容</h2>
      <hr/>
      <table class="table mb-5 table-striped">
        <thead height="28px">
          <th class="fontPadding">品名</th>
          <th class="fontPadding" width="90px">數量</th>
          <th class="fontPadding" width="90px">單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td class="text-end">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end fw-bold">總計</td>
            <td class="text-end fw-bold">{{ order.total }}</td>
          </tr>
        </tfoot>
      </table>
      <h2 class="orderBox">訂購資料</h2>
      <hr/>
      <table class="table table-striped">
        <tbody>
          <tr>
            <th>Email</th>
            <td class="text-end">{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td class="text-end">{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td class="text-end">{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td class="text-end">{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td class="text-end">
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="btn btn-danger">確認付款去</button>
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
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            console.log(this.order);
          }
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.getOrder();
          }
        });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>
