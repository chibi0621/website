<template>
  <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger">
          <h5 class="modal-title modalh5">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <h6 class="modalh6">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
            fill="#c23946" class="bi bi-exclamation-circle pb-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0
              0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1
              1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            確認是否刪除？
          </h6>
          <strong>{{ item.title }} (刪除後將無法恢復)。</strong>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
          data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger"
          @click="$emit('del-item')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import '@/assets/dist/dashboard/component/deleteModal.scss';

export default {
  props: {
    item: {},
  },
  data() {
    return {
      modal: '',
    };
  },
  mixins: [modalMixin],
};
</script>
