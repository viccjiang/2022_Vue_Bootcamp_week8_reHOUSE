<template>
  <Loading :active="isLoading"></Loading>
  <h2>單一產品</h2>
  <div class="container mt-10">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <!-- <span class="sr-only">Previous</span> -->
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <!-- <span class="sr-only">Next</span> -->
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <a class="text-muted" href="./index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a class="text-muted" href="./product.html">Product</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <!-- <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash"></i>
                </button>
              </div>
              <input
                type="text"
                class="
                  form-control
                  border-0
                  text-center
                  my-auto
                  shadow-none
                  bg-light
                "
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-0 border"
            @click="addCart(product.id, product.qty)"
          >
            加到購物車
          </button>
          </div> -->
           <div>
              <div class="input-group">
                <input type="number" class="form-control"
                    min="1" v-model.number="qty">
                    <!-- <select id="" class="form-select" v-model.number="product.qty"
                    @change="updateCartItem(product)">
                      <option :value="num" v-for="num in 20" :key="`${num}${product.id}`">
                          {{num}}
                      </option>
                    </select> -->
                    <button type="button" class="btn btn-primary"
                    @click="addCart(product)">
                        加入購物車
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5">
      <!-- <div class="col-md-4">
        <p>
          {{ product.category }}
        </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">
          {{ product.description }}
        </p>
      </div> -->
      <div class="col" v-for="(image, id) in product.imagesUrl" :key="id">
        <div class="card">
          <img
          v-if="image"
          :src="image"
          :alt="product.title"
          class="images card-img-top"
        />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
  <p>你可能也會喜歡</p>
  <ul>
    <li v-for="item in randomProducts" :key="item">
      {{item.title}}
    </li>
  </ul>
  </div>
</template>

<script>
import emitter from '../methods/emitter';

// 相同產品取得隨機數
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      product: {},
      products: [], // 取得所有產品資料 存起來
      id: '',
      isLoading: false,
      randomProducts: [],
      qty: 1, // 畫面上的輸入欄位顯示的預設值
    };
  },
  methods: {
    getProduct() {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params; // 這裡要用解構 airbnb 規則
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log('單一產品資訊 :', res);
          this.isLoading = false;
          this.product = res.data.product; // 賦值
          this.getProducts(); // 先取得單一產品資訊，再取得所有產品資訊
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log('取得所有產品資料：', res);
        this.products = res.data.products;
        this.getLookLike();
      });
    },
    getLookLike() {
      const { category } = this.product;
      const filterProducts = this.products.filter((item) => item.category === category); // 取得相同品項
      console.log('filterProducts:', filterProducts);
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([]);
      console.log(arrSet.size); // 這是類陣列長度
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) { // arrSet.size 不能寫死數字
        const num = getRandomInt(filterProducts.length); // 取得品項隨機數字
        arrSet.add(num);
        console.log(arrSet, num);
      }
      arrSet.forEach((index) => {
        this.randomProducts.push(filterProducts[index]);
      });
      console.log(this.randomProducts);
    },
    addCart() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, '加入購物車');
        console.log('購物車 :', res);
        emitter.emit('update-cart'); // 更新購物車數量
      })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, '加入購物車');
        });
      console.log('增加單一品項 :', cart);
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    updateCartItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
