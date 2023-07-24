<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="my-5 row justify-content-center">
    <ForM class="col-md-7" v-slot="{ errors }"
    @submit="createOrder">
      <h2 class="orderTitle">收件者資料</h2>
      <div class="mb-3">
        <FielD id="email" name="email" type="email" class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="輸入你的電子郵件" rules="email|required"
        v-model="form.user.email">
        </FielD>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <FielD id="name" name="姓名" type="text" class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="輸入你的姓名" rules="required"
        v-model="form.user.name">
        </FielD>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-5">
        <FielD id="tel" name="電話" type="tel" class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
        placeholder="輸入行動電話，EX:0911111111" rules="required"
        v-model="form.user.tel">
        </FielD>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>
      <h2 class="orderTitle">運送方法</h2>
      <div class="mb-5">
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadioDefault1" aria-label="Input">
          711取貨
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadioDefault2" aria-label="Input"/>
          全家取貨
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadioDefault3" aria-label="Input">
          萊爾富取貨
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadioDefault4" aria-label="Input">
          宅配
        </div>
        <div class="mt-1">
          <FielD id="address" name="地址" type="text" class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址 (請填寫詳細地址，不用含郵遞區號)" rules="required"
          v-model="form.user.address">
          </FielD>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <h2 class="orderTitle">付款方式</h2>
      <div class="mb-5">
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadio" id="flexRadio1" aria-label="Input">
          貨到付款
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadio2" aria-label="Input">
          超商條碼付款
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadio3" aria-label="Input">
          信用卡付款
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadio4" aria-label="Input">
          atm轉帳
        </div>
        <div class="form-check mb-1">
          <input class="form-check-input" type="radio"
          name="flexRadioDefault" id="flexRadio5" aria-label="Input">
          line pay付款
        </div>
      </div>
      <h2 class="orderTitle">發票類型</h2>
      <div class="mb-5">
          <select class="form-select" aria-label="Select">
            <option selected>選擇發票類型</option>
            <option value="1">個人統一發票</option>
            <option value="2">企業統一發票（需統編）</option>
            <option value="3">手機條碼載具</option>
            <option value="4">捐贈發票</option>
            <option value="5">存至會員載具</option>
          </select>
      </div>
      <div class="mb-5">
          <h2 class="orderTitle">備註</h2>
          <textarea name="" id="message" class="form-control" cols="30" rows="5"
          aria-label="Message" v-model="form.message"></textarea>
      </div>
      <div class="text-end mb-5">
          <button class="btn btn-lg btn-block btnColor rounded-pill" type="submit">
            送出訂單
          </button>
      </div>
    </ForM>
  </div>
</template>

<script>
import '@/assets/dist/user/userOrder.scss';

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
      orderId: '',
    };
  },
  methods: {
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        console.log(res);
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
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
  },
};
</script>
