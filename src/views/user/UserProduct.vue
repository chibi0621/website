<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="container">
    <div class="breadBox" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/cart" class="cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5d4036"
            class="bi bi-handbag pb-1 me-1" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 1 0-6 0v2H3.36a1.5
              1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0
              2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1
              0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5
              1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
            </svg>
            <span>購物車</span>
          </router-link>
        </li>
        <li class="breadcrumb-item active breadLi" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </div>
    <hr class="breadHr">
    <div class="row justify-content-center aProductBox">
      <div class="col-md-1"></div>
      <figure class="col-md-5 figureBox">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </figure>
      <div class="col-md-5 productTextBox">
        <h2 class="productName fs-4 mb-5">{{ product.title }}</h2>
        <div class="mb-2 textBox">商品類型：</div>
        <div class="text mb-5">
          {{ product.category }}
        </div>
        <div class="mb-2 textBox">
          商品描述：
        </div>
        <div class="text mb-5 text-break">
          {{ product.description }}
        </div>
        <div class="priceText" v-if="product.price">
          <i class="bi bi-currency-dollar"></i>
          {{  $filters.currency(product.origin_price) }} 元
        </div>
        <hr/>
        <div class="text-end">
          <button type="button" class="addProductBtn"
          @click="addToCart(product.id)">
            加入購物車
          </button>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import '@/assets/dist/user/userProduct.scss';

export default {
  data() {
    return {
      product: {},
      id: '',
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
        this.$router.push('/user/cart');
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
