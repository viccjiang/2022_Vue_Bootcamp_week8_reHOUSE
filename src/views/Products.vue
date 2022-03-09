<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end mt-4">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      建立新的產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否上架</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="badge bg-success" v-if="item.is_enabled">上架中</span>
          <span class="badge bg-secondary" v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- props，前內後外，pages內接收，pagination外層傳 -->
  <!-- emit，前內後外，emit-pages內事件名稱，getProducts觸發外函式 -->
  <Pagination :pages="pagination"
    @emit-pages="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
    :is-new="isNew"
  ></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
// import ProductModal from '../components/ProductModal.vue';
import ProductModal from '@/components/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {}, // 外層的 tempProduct 透過 props 傳送前內後外之後，元件內的 product 接收
      isNew: false, // 判斷是否為新增
      isLoading: false, // 判斷是否 louding 狀態
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true; // 尚未取得商品前 loading 狀態
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false; // 取得商品 loading 關閉
          if (response.data.success) {
            console.log(response.data);
            this.products = response.data.products;
            this.pagination = response.data.pagination;
            // console.log(this.products, this.pagination);
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
          this.$router.push('/login');
        });
    },
    openModal(isNew, item) {
      // console.log(isNew, item);
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item }; // 用展開把資料取出來
      }
      this.isNew = isNew; // 把狀態存起來
      const productComponent = this.$refs.productModal;
      productComponent.showModal(); // 再打開內層的 modal
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯 (用 isNew 來判斷新增或編輯) ( 若不是新增就要改變 api 路徑以及 httpMethod ) (取到產品 id 才有辦法編輯)
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          console.log(response);
          productComponent.hideModal();
          // this.getProducts();
          if (response.data.success) {
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功',
            });
          }
        })
        .catch((error) => {
          productComponent.hideModal();
          // console.dir(error);
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: error.response.data.message.join('、'),
          });
        });
    },
    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  mounted() {
    // 重新整理頁面後，跳出請重新登入。Cookie 內是有 token 的，不過還是跳出重新登入。 解法式 dashboard 改成 created
    this.getProducts();
  },
};
</script>
