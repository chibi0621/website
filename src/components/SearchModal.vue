<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content border-0">
        <div class="text-end pt-2 pe-2">
          <button type="button" class="btn-close btnCircle"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-header border border-0 justify-content-center pt-0">
          <h6 class="productSearch">商品搜尋</h6>
        </div>
        <div class="modal-body">
          <form class="my-3">
            <input class="searchInput" type="text" placeholder="search" required minlength="1"/>
            <button class="enterBtn" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8c6450c3"
              class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85
                3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0
                1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
import '@/assets/user/component/searchModal.scss';

export default {
  name: 'searchModal',
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
  mixins: [modalMixin],
};
</script>
