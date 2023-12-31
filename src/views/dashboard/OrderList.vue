<template>
  <Loading :active="isLoading"></Loading>
  <hr/>
  <table class="table align-middle table-hover orderListTable">
    <thead>
      <tr class="fw-bold">
        <th>購買時間</th>
        <th>E-mail</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-text="item.user.email" v-if="item.user"></span>
          </td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i" class="mb-1">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input"
              type="checkbox" :id="`paidSwitch${item.id}`"
              v-model="item.is_paid" aria-label="Check"
              @change="updatePaid(item)"/>
              <div class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </div>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-secondary btn-sm"
              @click="openModal(false,item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelOrderModal(item)">刪除</button>
            </div>
          </td>
          </tr>
        </template>
      </tbody>
  </table>
  <hr/>
  <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid"></OrderModal>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>

<script>
import '@/assets/dashboard/orderList.scss';
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import Pagination from '@/components/PagiNation.vue';

export default {
  components: { DelModal, OrderModal, Pagination },
  data() {
    return {
      orders: [],
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
    };
  },
  methods: {
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders;
        this.pagination = response.data.pagination;
        this.isLoading = false;
        console.log(response);
      });
    },
    updatePaid(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((response) => {
        this.isLoading = false;
        this.getOrders(this.currentPage);
        this.$httpMessageState(response, '更新付款狀態');
      });
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
      });
    },
  },
  created() {
    this.getOrders();
    console.log(process.env.VUE_APP_API);
  },
};
</script>
