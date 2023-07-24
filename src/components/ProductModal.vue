<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header modalColor">
          <h5 class="modal-title fs-5" id="exampleModalLabel">
            <span>新增品項</span>
          </h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-4">
                <h6 class="h6">輸入圖片網址</h6>
                <input type="text" class="form-control mt-1" id="image"
                v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結"/>
              </div>
              <div class="mb-4">
                <h6 class="h6">或</h6>
              </div>
              <div class="mb-3">
                <h6 class="h6">上傳圖片</h6>
                <i class="fas fa-spinner fa-spin"></i>
                <input type="file" ref="fileInput" id="customFile"
                class="form-control mt-1" @change="uploadFile"/>
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              <div class="mt-5" v-if="tempProduct.images">
                <div class="mb-3 input-group" >
                  <input type="url" class="form-control form-control mt-1"
                  placeholder="請輸入連結"/>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <h6 class="h6">標題</h6>
                <input type="text" class="form-control mt-1" id="title"
                v-model="tempProduct.title" placeholder="請輸入標題"/>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <h6 class="h6">分類</h6>
                  <input type="text" class="form-control mt-1" id="category"
                  v-model="tempProduct.category" placeholder="請輸入分類"/>
                </div>
                <div class="mb-3 col-md-6">
                  <h6 class="h6">單位</h6>
                  <input type="text" class="form-control mt-1" id="unit"
                  v-model="tempProduct.unit" placeholder="請輸入單位"/>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <h6 class="h6">原價</h6>
                  <input type="number" class="form-control mt-1" id="origin_price"
                  v-model="tempProduct.unit" placeholder="請輸入原價"/>
                </div>
                <div class="mb-3 col-md-6">
                  <h6 class="h6">售價</h6>
                  <input type="number" class="form-control mt-1" id="price"
                  v-model.number="tempProduct.price" placeholder="請輸入售價"/>
                </div>
              </div>
              <hr/>
              <div class="mb-3">
                <h6 class="h6">產品描述</h6>
                <textarea type="text" class="form-control mt-1" id="description"
                v-model="tempProduct.description" placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <h6 class="h6">說明內容</h6>
                <textarea type="text" class="form-control mt-1" id="content"
                v-model="tempProduct.description" placeholder="請輸入產品說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input mt-1" type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                  v-model="tempProduct.is_enabled"/>
                  <span class="form-check-label mt-1" for="is_enabled">
                    <h6>是否啟用</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger"
          data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-secondary"
          @click="$emit('update-product',tempProduct)">確認
          </button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import '@/assets/dist/dashboard/component/productModal.scss';

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      console.log(this.tempProduct);
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>
