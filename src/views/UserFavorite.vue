<template>
  <Loading :active="isLoading" loader="bars" color="#236F6B"> </Loading>
  <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img
      class="filters"
      style="
        height: 400px;
        background-image: url(https://images.unsplash.com/photo-1616627408664-00fa6151580c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
        background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
      "
    />
    <div
      class="
        card-img-overlay
        d-flex
        flex-column
        justify-content-center
        align-item-center
      "
    >
      <h1 class="card-title text-center fw-bold">願望清單</h1>
    </div>
  </div>
  <div class="container mt-0 mt-md-10 mb-0 mb-md-10">
    <div class="g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 flex-column justify-content-center flex-md-row">
      <div
        class="d-flex flex-column justify-content-center align-items-center"
        v-if="favorites.length === 0"
      >
        <h3 class="h5 mb-4">目前沒有收藏任何商品...</h3>
        <router-link to="/products" class="btn btn-soft">
          來去選購
        </router-link>
      </div>
      <template v-else>
      <div class="col" v-for="item in favorites" :key="item.id">
        <div class="card h-100 rounded-0 position-relative">
          <a
            @click="addMyFavorite(item)"
            :class="{ active: myFavorite.includes(item.id) }"
            class="link-secondary d-block rounded-0"
          >
            <i
              v-if="myFavorite.includes(item.id)"
              class="
                fs-5
                bi bi-heart-fill
                position-absolute
                top-00
                end-0
                me-1
                mt-1
                text-danger
              "
            ></i>
            <i
              v-else
              class="
                fs-5
                bi bi-heart
                position-absolute
                top-00
                end-0
                me-1
                mt-1
                text-danger
              "
            ></i>
          </a>
          <a href="#" class="rounded-0" @click.prevent="getProduct(item.id)">
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
              >原價 NT$ {{ $filters.currency(item.origin_price) }} 元</del
            >
            <div class="h5 text-danger mb-3" v-if="item.price">
              NT$ {{ $filters.currency(item.price) }} 元
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                class="btn btn-outline-secondary rounded-0 border"
                type="button"
                @click="getProduct(item.id)"
              >
                查看更多
              </button>
              <button
                class="btn btn-soft text-light rounded-0 border-0 me-md-2"
                type="button"
                :disabled="this.status.loadingItem === item.id"
                @click="addCart(item.id)"
              >
                <div
                  v-if="this.status.loadingItem === item.id"
                  class="spinner-border text-light spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      </template>
    </div>
  </div>
  <!-- 我的最愛 -->
  <!-- {{ myFavorite.length }} -->
</template>

<script>
import emitter from '@/methods/emitter';
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
      myFavorite: storageMethods.get() || [], // 我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
      favorites: [],
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log('取得 response：', response);
        this.products = response.data.products;
        this.isLoading = false;
        if (response.data.success) {
          console.log('取得所有產品：', response.data);
          this.products = response.data.products;
          this.getFavorites();
        }
      });
    },
    getFavorites() {
      this.favorites = []; // 先給我的最愛空陣列
      const favoriteIdArr = JSON.parse(localStorage.getItem('hexFavorite')) || []; // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
      console.log(favoriteIdArr);
      for (let i = 0; i < this.products.length; i += 1) {
        for (let k = 0; k < favoriteIdArr.length; k += 1) {
          if (this.products[i].id === favoriteIdArr[k]) {
            this.favorites.push(this.products[i]);
          }
        }
      }
    },
    addMyFavorite(item) {
      // console.log('addMyFavorite');
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) {
        // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.getFavorites();
        this.getProducts();
        // emitter.emit('update-favorite'); // 更新最愛數量
      } else {
        this.myFavorite.push(item.id); // 否則沒有此品項 就把品項加入
        // emitter.emit('update-favorite'); // 更新最愛數量
      }
      console.log('myFavorite 我的最愛數量', this.myFavorite.length);
      // storageMethods.save(this.myFavorite); // 儲存狀態
      // emitter.emit('update-favorite'); // 更新最愛數量
    },
    getCategories() {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      const categories = new Set(); // 建在全新的空的物件上
      this.products.forEach((item) => {
        categories.add(item.category); // 把品項加入 categories
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
  watch: {
    // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler() {
        storageMethods.save(this.myFavorite); // 把資料儲存
        emitter.emit('update-favorite'); // 更新最愛數量
      },
      deep: true,
    },
  },
  computed: {
    // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
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
