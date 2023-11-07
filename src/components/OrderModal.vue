<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
            <span>Order Details</span>
          </h5>
          <button type="button" class="btn-close border border-0"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h6 class="modalH6 mb-2">用戶資料</h6>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px;">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h6 class="modalH6 mb-2">訂單細節</h6>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(tempOrder.create_at)}}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr >
                    <th>總金額</th>
                    <td>
                      {{ $filters.currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6 class="modalH6 mb-2">選購商品</h6>
              <table class="modalTable">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>
                      {{ item.qty }} / {{ item.product.unit }}
                    </td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="modalCancelBtn"
          data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="modalCheckBtn"
          @click="$emit('update-order',tempOrder)">確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
import '@/assets/dashboard/component/orderModal.scss';

export default {
  name: 'orderModal',
  props: {
    order: {
      type: Object,
      default() { return {}; },
    },
  },
  data() {
    return {
      status: {},
      modal: '',
      tempOrder: {},
      isPaid: false,
    };
  },
  emits: ['update-product'],
  mixins: [modalMixin],
  inject: ['emitter'],
  watch: {
    order() {
      this.tempOrder = this.order;
      this.isPaid = this.tempOrder.is_paid;
    },
  },
};
</script>
