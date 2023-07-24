<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="container-fluid">
    <div class="productListBox ms-5">
      <div class="col-md-3 m-5 p-1" v-for="item in products" :key="item.id">
        <button class="btnGetProduct" @click="getProduct(item.id)">
          <h2 class="text-start productTitle">{{ item.title }}</h2>
          <figure class="productImg" :style="{backgroundImage: `url(${item.imageUrl})`}">
          </figure>
        </button>
        <div class="productPrice" v-if="item.price">
          <i class="bi bi-currency-dollar"></i>
          {{ $filters.currency(item.origin_price) }}
        </div>
        <div class="text-end me-5">
          <button type="button" class="btn btnColorLight p-1"
          @click="getProduct(item.id)">
            商品詳情
          </button>
          <button type="button" class="btn btnColor ms-4 p-1"
          :disabled="this.status.loadingItem === item.id"
          @click="addToCart(item.id)">
            <div v-if="this.status.loadingItem === item.id"
            class="spinner-grow text-light spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
            fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5
              3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2
              5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/dist/user/userProductList.scss';

export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        this.isLoading = false;
      });
    },
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
  },
  created() {
    this.getProducts();
  },
};
</script>
