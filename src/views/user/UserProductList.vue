<template>
  <LoadingPlugin :active="isLoading"></LoadingPlugin>
  <div class="container-fluid">
    <h4 class="fs-4 fw-bold ProductListTitle">
      <span class="p-3">All Products 全部商品</span>
      <hr>
    </h4>
    <div class="productListBox">
      <div v-for="item in products" :key="item.id">
        <button class="btnGetProduct" @click="getProduct(item.id)">
          <figure class="productImg" :style="{backgroundImage: `url(${item.imageUrl})`}">
          </figure>
          <h2 class="text-start productTitle mb-2 ps-1">{{ item.title }}</h2>
        </button>
        <div class="priceBox ps-1" v-if="item.price">
          <span class="fw-bold">
            <i class="bi bi-currency-dollar"></i>
            {{ $filters.currency(item.origin_price) }}
          </span>
          <button type="button" class="btn addToCartBtn p-0 border border-0"
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
        this.$httpMessageState(res, '加入購物車');
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
