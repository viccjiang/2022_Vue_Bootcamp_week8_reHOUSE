<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-10">
    <div class="row flex-column flex-md-row">
      <!-- 左側分類欄 -->
      <div class="col-12 mt-4 flex-column flex-md-row">
        <div class="list-group rounded-0 list-group-horizontal">
           <a
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = ''"
            >全部</a
          >
          <a
            href="#"
            v-for="item in categories"
            :key="item"
            class="list-group-item list-group-item-action"
            @click.prevent="selectCategory = item"
            >{{ item }}</a
          >
        </div>
      </div>
      <!-- 右側產品列 -->
      <div class="col-12">
        <div class="row mt-4">
          <div class="col mb-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div class="col" v-for="item in filterProducts" :key="item.id">
                <div class="card h-100 rounded-0 position-relative">
                  <a
                    @click="addMyFavorite(item)"
                    :class="{ active: myFavorite.includes(item.id) }"
                    class="
                    link-secondary
                    d-block
                    rounded-0
                    "
                  >
                    <i class="fs-5 bi bi-heart position-absolute top-00 end-0 me-1 mt-1"></i>
                  </a>
                  <a
                    href="#"
                    class="rounded-0 "
                    @click.prevent="getProduct(item.id)"
                  >
                    <div
                      style="
                        height: 300px;
                        background-size: cover;
                        background-position: center;
                      "
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                  </a>
                  <!-- <img :src="item.imageUrl" class="card-img-top" alt="..." /> -->
                  <div class="card-body">
                    <span class="badge bg-secondary text-light mb-2">{{
                      item.category
                    }}</span>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <h6 class="h6 text-secondary">
                      {{ item.description }}
                    </h6>

                    <div class="h5 list-inline-item" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <del
                      class="h6 list-inline-item text-secondary mt-4"
                      v-if="item.price"
                      >原價 NT$
                      {{ $filters.currency(item.origin_price) }} 元</del
                    >
                    <div class="h5 text-danger mb-3" v-if="item.price">
                      NT$ {{ $filters.currency(item.price) }} 元
                    </div>
                    <!-- 按鈕 -->
                    <!-- <div class="d-grid gap-2 col-12 mx-auto"> -->
                      <!-- 加入購物車 -->
                      <!-- <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)"
                      >
                        <div
                          v-if="this.status.loadingItem === item.id"
                          class="spinner-border text-danger spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加到購物車
                      </button> -->
                      <!-- 我的最愛 -->
                      <!-- <button
                        type="button"
                        @click="addMyFavorite(item)"
                        :class="{ active: myFavorite.includes(item.id) }"
                        class="
                          btn
                          d-block
                          btn-outline-secondary
                          rounded-0
                          border
                        "
                      >
                        加到我的最愛
                      </button> -->
                      <!-- 查看細節 -->
                      <!-- <button
                        type="button"
                        class="btn btn-outline-secondary rounded-0 border"
                        @click="getProduct(item.id)"
                      >
                        查看更多
                      </button>
                    </div> -->
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button class="btn btn-outline-secondary rounded-0 border" type="button"
                        @click="getProduct(item.id)">查看更多</button>
                      <button class="btn btn-soft text-light rounded-0 border-0 me-md-2" type="button"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)"><div
                          v-if="this.status.loadingItem === item.id"
                          class="spinner-border text-light spinner-border-sm"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                        加到購物車</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 分頁 -->
          <Pagination class="d-flex justify-content-center justify-content-md-end"
            :pages="pagination"
            @emit-pages="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
  <!-- 我的最愛 -->
  <!-- {{ myFavorite.length }} -->
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '../components/Pagination.vue';
// 我的最愛使用 LocalStorage 來存取
// 因為LocalStorage不能存物件，所以要先轉型為字串
const storageMethods = {
  // 存檔
  save(favorite) {
    // 丟進來的東西先做轉型 JSON.stringify
    const favoriteString = JSON.stringify(favorite);
    // hexFavorite 再做寫入，也就是把東西存進去
    localStorage.setItem('hexFavorite', favoriteString);
  },
  // 取出
  get() {
    // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};
export default {
  data() {
    return {
      products: [], // getProducts
      product: {},
      pagination: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
      categories: [], // 產品的分類項目
      selectCategory: '', // 選取分類項目按鈕後，selectCategory = item，用 computed 做切換
      myFavorite: storageMethods.get() || [], // 我的最愛
    };
  },
  components: {
    Pagination,
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    addMyFavorite(item) {
      // console.log('addMyFavorite');
      // this.myFavorite.push(item.id);
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
      } else {
        this.myFavorite.push(item.id);
      }
      console.log('myFavorite 我的最愛數量', this.myFavorite.length);
      // storageMethods.save(this.myFavorite);
    },
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log('取得 response：', response);
        this.products = response.data.products;
        this.isLoading = false;
        if (response.data.success) {
          console.log('取得所有產品：', response.data);
          this.products = response.data.products;
          this.pagination = response.data.pagination;
          this.getCategories();
        }
      });
    },
    getCategories() {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      const categories = new Set(); // 建在全新的空的物件上
      this.products.forEach((item) => {
        categories.add(item.category);// 把品項加入 categories
      });
      console.log('取得所有分類 Set：', categories); // 這裡是 Set 屬於類陣列
      this.categories = [...categories]; // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy
      console.log('取得所有分類 Proxy：', this.categories);
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        console.log(res);
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
  },
  watch: { // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler() {
        storageMethods.save(this.myFavorite);
      },
      deep: true,
    },
  },
  computed: { // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory));
      // 如果選到的產品品項是一樣的就呈現
      // 監聽 this.products  this.selectCategory
      // 空字串，或任何符合結果都會是 “真值”
    },
  },
  created() {
    // 改為 mounted
    this.getProducts();
  },
};
</script>
