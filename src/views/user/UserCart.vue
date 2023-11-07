<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="row sticky-top">
    <h4 class="fs-4 cartTitle">
      <span class="p-3">Cart</span>
      <hr>
    </h4>
    <div class="cartBox">
      <table class="table align-middle table-light">
        <thead class="borderBottom">
          <tr class="fw-bold">
            <th width="50%">品名</th>
            <th width="20%">數量</th>
            <th width="5%"></th>
            <th width="15%">單價</th>
            <th width="10%">移除</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input type="number" class="form-control" min="1"
                  aria-label="Number" v-model.number="item.qty"
                  @change="upadateCart(item)" :disabled="item.id === status.loadingItem">
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                </div>
              </td>
              <td></td>
              <td>
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                {{ $filters.currency(item.final_total) }}
              </td>
              <td>
                <button type="button" class="ps-1 trashBtn"
                :disabled="status.loadingItem === item.id"
                @click="removeCartItem(item.id)">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr class="fw-bold">
            <td width="50%"></td>
            <td width="20%"></td>
            <td width="5%"></td>
            <td width="15%">總計</td>
            <td width="10%">{{ $filters.currency(cart.total) }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td width="50%"></td>
            <td width="20%"></td>
            <td width="5%"></td>
            <td width="15%" class="text-success">折扣價</td>
            <td width="10%" class="text-success">{{ $filters.currency(cart.final_total) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="input-group input-group-sm cartBox">
      <input type="text" class="form-control" v-model="coupon_code"
      aria-label="Text" placeholder="請輸入優惠碼"/>
      <div class="input-group-append">
        <button class="btn btnCoupon" type="button" @click="addCouponCode">
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-5 bottomBox">
    <div class="d-flex justify-content-center">
      <button type="button" class="orderBtn"
      @click="goToOrder">
        下一步：前往結帳
      </button>
    </div>
  </div>
</template>

<script>
import '@/assets/user/userCart.scss';

export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      coupon_code: '',
      deliverPrice: '60',
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    upadateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCart();
        this.isLoading = false;
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項');
        this.status.loadingItem = '';
        this.getCart();
        this.isLoading = false;
      });
    },
    goToOrder() {
      this.$router.push('/user/order');
    },
  },
  created() {
    this.getCart();
  },
};
</script>
