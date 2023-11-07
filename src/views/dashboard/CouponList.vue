<template>
  <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button class="newCouponBtn" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <hr/>
    <table class="table align-middle table-hover couponListTable">
      <thead>
        <tr class="fw-bold">
          <th>名稱</th>
          <th width="15%">折扣百分比</th>
          <th width="15%">到期日</th>
          <th width="15%">是否啟用</th>
          <th width="15%">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>
            {{ $filters.date(item.due_date) }}
          </td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-secondary btn-sm"
              @click="openCouponModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="openDelCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <hr/>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupons="updateCoupons"></CouponModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupons"></DelModal>
</template>

<script>
import '@/assets/dashboard/couponList.scss';
import DelModal from '@/components/DelModal.vue';
import CouponModal from '@/components/CouponModal.vue';

export default {
  components: { DelModal, CouponModal },
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  methods: {
    openCouponModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
      } else {
        this.tempCoupon = { ...item };
      }
      this.isNew = isNew;
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    getCoupons() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons;
        this.isLoading = false;
        console.log(response.data);
      });
    },
    updateCoupons(tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          console.log(response, tempCoupon);
          this.$httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon }).then((response) => {
          console.log(response);
          this.$httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    delCoupons() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempCoupon);
        this.$httpMessageState(response, '刪除優惠券');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
