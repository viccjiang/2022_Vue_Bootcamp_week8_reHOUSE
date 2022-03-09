<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <!-- modal 依照傳進來的值做標題切換 -->
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempProduct.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              <!-- 延伸技巧，多圖 -->
              <!-- 陣列 的判斷方式 ，如果是陣列才會跑判斷迴圈 -->
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <template class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">圖片網址</label>
                    <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control"
                      placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="image">
                </template>
                <!-- 圖片區按鈕 -->
                <!-- 先判斷陣列內 有沒有第一個元素 如果沒有的話要新增一個
                  這個意思是 如果都沒有的話 新增一個
                  如果有要判斷(特定索引位置)裡面有沒有字，有字的話跑出新增下一個
                  索引位置帶入(最後一個就是length-1) -->
                <div v-if="!tempProduct.imagesUrl.length ||
                tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                  <!-- 陣列新增 -->
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <!-- 陣列刪除 pop -->
                  <button class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="tempProduct.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
              <!-- 這裡的 if / else 對應是 Array.isArray 這個判斷式，
              所以這裡的意思是指，若不是陣列的話，直接跑 createImages 這個方法嗎 ?
              直接給空陣列 [] 並且新增 push 空陣列 ，請問助教的寫法是這個意思嗎 ? -->
              <div v-else>
                <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                  新增圖片
                </button>
              </div>
            </div>

            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempProduct.title"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="tempProduct.category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    v-model="tempProduct.unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    v-model.number="tempProduct.origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model.number="tempProduct.price"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempProduct.description"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  v-model="tempProduct.content"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal';
import modalMixin from '../mixins/modalMixin';

export default {
  // 內層接收
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update-product'],
  inject: ['emitter'],
  // 監聽 modal 內 product 內容是否更動
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {
        imagesUrl: [],
      }, // 進行外層資料的接收 ( 單向數據流 ) 修改資料時使用的 (編輯資料 )
    };
  },
  methods: {
    // showModal() {
    //   this.modal.show();
    // },
    // hideModal() {
    //   this.modal.hide();
    // },
    uploadFile() {
      // 把上傳的檔案取出來
      const uploadedFile = this.$refs.fileInput.files[0];
      // console.dir(uploadedFile);
      // 轉成 formData 格式
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.tempProduct.imageUrl = response.data.imageUrl;
        }
      });
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
  },
  // mounted() {
  //   this.modal = new Modal(this.$refs.modal);
  // },
  mixins: [modalMixin],
};
</script>
