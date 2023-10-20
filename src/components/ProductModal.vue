<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title fs-5 fw-bold" id="exampleModalLabel">
            <span>Product Details</span>
          </h5>
          <button type="button" class="btn-close border border-0"
          data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-4">
                <h6 class="modalH6">輸入圖片網址</h6>
                <input type="text" class="addProductInput mt-2" id="image"
                v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結"/>
              </div>
              <div class="mb-4">
                <h6>或</h6>
              </div>
              <div class="mb-3">
                <h6 class="modalH6">上傳圖片</h6>
                <i class="fas fa-spinner fa-spin"></i>
                <input type="file" ref="fileInput" id="customFile"
                class="addProductInput mt-2" @change="uploadFile"/>
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              <div class="mt-5" v-if="tempProduct.images">
                <div class="mb-3 input-group" >
                  <input type="url" class="addProductInput mt-2"
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
                <h6 class="modalH6">商品名稱</h6>
                <input type="text" class="addProductInput mt-2" id="title"
                v-model="tempProduct.title" placeholder="請輸入商品名稱"/>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <h6 class="modalH6">分類</h6>
                  <input type="text" class="addProductInput mt-2" id="category"
                  v-model="tempProduct.category" placeholder="請輸入分類"/>
                </div>
                <div class="mb-3 col-md-6">
                  <h6 class="modalH6">單位</h6>
                  <input type="text" class="addProductInput mt-2" id="unit"
                  v-model="tempProduct.unit" placeholder="請輸入單位"/>
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <h6 class="modalH6">原價</h6>
                  <input type="number" class="addProductInput mt-2" id="origin_price"
                  v-model="tempProduct.unit" placeholder="請輸入原價"/>
                </div>
                <div class="mb-3 col-md-6">
                  <h6 class="modalH6">售價</h6>
                  <input type="number" class="addProductInput mt-2" id="price"
                  v-model.number="tempProduct.price" placeholder="請輸入售價"/>
                </div>
              </div>
              <hr/>
              <div class="mb-3">
                <h6 class="modalH6">商品描述</h6>
                <textarea type="text" class="addProductInput mt-2" id="description"
                v-model="tempProduct.description" placeholder="請輸入商品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <h6 class="modalH6">說明內容</h6>
                <textarea type="text" class="addProductInput mt-2" id="content"
                v-model="tempProduct.description" placeholder="請輸入商品說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <input type="checkbox" :true-value="1" :false-value="0"
                id="is_enabled" v-model="tempProduct.is_enabled"/>
                <span for="is_enabled">
                  啟用
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="modalCancelBtn"
          data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="modalCheckBtn"
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
