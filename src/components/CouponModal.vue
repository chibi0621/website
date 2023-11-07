<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
            <span>Coupon Details</span>
          </h5>
          <button type="button" class="btn-close border border-0"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <h6 class="modalH6">標題</h6>
            <input type="text" class="addProductInput mt-2" id="title"
            v-model="tempCoupons.title" placeholder="請輸入標題"/>
          </div>
          <div class="mb-3">
            <h6 class="modalH6">優惠碼</h6>
            <input type="text" class="addProductInput mt-2" id="coupon_code"
            v-model="tempCoupons.code" placeholder="請輸入優惠碼"/>
          </div>
          <div class="mb-3">
            <h6 class="modalH6">到期日</h6>
            <input type="date" class="addProductInput mt-2" id="due_date"
            v-model="due_date"/>
          </div>
          <div class="mb-3">
            <h6 class="modalH6">折扣百分比</h6>
            <input type="number" class="addProductInput mt-2" id="price"
            v-model.number="tempCoupons.percent" placeholder="請輸入折扣百分比"/>
          </div>
          <div class="mb-3">
            <input type="checkbox" :true-value="1" :false-value="0"
            id="is_enabled" v-model="tempCoupons.is_enabled"/>
            <span for="is_enabled">
              是否啟用
            </span>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="modalCancelBtn"
          data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="modalCheckBtn"
          @click="$emit('update-coupons',tempCoupons)">確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import '@/assets/dashboard/component/couponModal.scss';

export default {
  name: 'couponsModal',
  props: {
    coupons: {},
  },
  data() {
    return {
      tempCoupons: {},
      due_date: '',
    };
  },
  emits: ['update-coupons'],
  watch: {
    coupons() {
      this.tempCoupons = this.coupons;
      console.log(this.tempCoupons.due_date);
      const dateAndTime = new Date(this.tempCoupons.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.tempCoupons.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  mixins: [modalMixin],
};
</script>
