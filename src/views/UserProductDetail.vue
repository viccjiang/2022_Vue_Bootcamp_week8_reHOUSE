<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-3 mt-md-5">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" style="
            height: 500px;
            background-position: center center;
            background-size: cover;
            object-fit:cover;
          " alt="..." />
            </div>
          </div>
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
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                min="1"
                v-model.number="qty"
              />
              <!-- <select id="" class="form-select" v-model.number="product.qty"
                    @change="updateCartItem(product)">
                      <option :value="num" v-for="num in 20" :key="`${num}${product.id}`">
                          {{num}}
                      </option>
                    </select> -->
              <button
                type="button"
                class="btn btn-soft border-0"
                @click="addCart(product)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <ul class="list-unstyled">
            <li>
              本商品為「訂製款」。付款後，從開始製作到寄出商品為 15 個工作天。（不包含假日）
            </li>
          </ul>
          <hr>
          <ul class="list-unstyled text-danger">
            <li>
              此商品可領取折扣碼
            </li>
            <li>
              實際優惠折抵以購物車內的金額為準
            </li>
          </ul>
         <hr>
      </div>
    <!-- <swiper :slides-per-view="1" :space-between="50">
      <swiper-slide v-for="(item, key)  in product.imagesUrl" :key="item.id">
        <div
          style="
            height: 300px;
            background-position: center center;
            background-size: cover;
          "
          :style="{ backgroundImage: `url(${product.imagesUrl[key]})` }"
        ></div>
      </swiper-slide>
   </swiper> -->
  </div>
  </div>
  <div class="container">
    <div class="row mt-5 mb-5">
    <!-- Nav tabs -->
      <div class="col">
        <ul
          class="nav nav-pills mb-3 border p-3 category-bar rounded"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              產品細節
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              規格說明
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link link-soft"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              運送方式
            </button>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <!-- 產品 -->
          <div
            class="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              class="row g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-5"
            >
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
              <div
                class="col"
                v-for="(image, id) in product.imagesUrl"
                :key="id"
              >
                <div class="">
                  <img
                  style="
                        height: 200px;
                        background-size: cover;
                        background-position: center;
                        object-fit:cover;
                      "
                    v-if="image"
                    :src="image"
                    :alt="product.title"
                    class="images img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- 規格 -->
          <div
            class="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
          </div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading1">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                      分類
                    </button>
                  </h2>
                  <div id="flush-collapse1" class="accordion-collapse collapse show" aria-labelledby="flush-heading1" >
                    <div class="accordion-body">{{ product.category }}</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading2">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                      產品說明
                    </button>
                  </h2>
                  <div id="flush-collapse2" class="accordion-collapse collapse show" aria-labelledby="flush-heading2" >
                    <div class="accordion-body">
                      {{ product.description }}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading3">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                      規格說明
                    </button>
                  </h2>
                  <div id="flush-collapse3" class="accordion-collapse collapse show" aria-labelledby="flush-heading3" >
                    <div class="accordion-body">{{ product.content }}</div>
                  </div>
                </div>
              </div>
          <!-- 運送 -->
          <div
            class="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      運送方式
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" >
                    <div class="accordion-body">帳款確認後將儘快處理您的訂單。</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      配送方式
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>宅配</li>
                        <li>統一速達(黑貓宅急便)/順豐快遞，
                        出貨時間：週一～週五(不含週六日及國定例假日)</li>
                        <li>超商取貨付款：7-11/全家</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      出貨時間
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse show" aria-labelledby="flush-headingThree" >
                    <div class="accordion-body">出貨時間：週一～週五(不含週六日及國定例假日)</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading4">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                      運費說明
                    </button>
                  </h2>
                  <div id="flush-collapse4" class="accordion-collapse collapse show" aria-labelledby="flush-heading4" >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>超商取貨付款：每筆訂單為新台幣 65元運費。</li>
                        <li>宅配到府：台灣本島每筆訂單為新台幣 80 元運費。</li>
                        <li>為長期回饋會員，單筆商品訂購金額滿 1,000 元以上，享免運費優惠。</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-heading5">
                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                      其他事項
                    </button>
                  </h2>
                  <div id="flush-collapse5" class="accordion-collapse collapse show" aria-labelledby="flush-heading5" >
                    <div class="accordion-body">
                      <ul class="list-unstyled">
                        <li>到貨當日，請務必確認有人可以收貨。</li>
                        <li>客人希望的配送時段都會備註在宅配單上， 可是會因為宅配站所每日配送的貨物多寡，以及送貨路線等因素，都會影響到配送到達的時間！</li>
                        <li>配送範圍限台灣本島各縣市(不含郵政信箱)。</li>
                        <li>如本店無法接受您的訂單，將於收到您的訂單後二個工作日內通知您。但法令另有規定者除外。</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <p class="fs-3 fw-bold bg-soft py-2 text-white text-center rounded">你可能也會喜歡</p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div v-for="item in randomProducts" :key="item" class="col">
        <div class="card h-100">
          <img style="
                        height: 200px;
                        background-size: cover;
                        background-position: center;
                        object-fit:cover;
                      " :src="item.imageUrl" class="card-img-top" alt="">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ item.title }}</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <a href="" class="btn btn-soft stretched-link d-flex flex-column text-center"  @click.prevent="goProductPage(item.id)">查看更多</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul>
      <li v-for="item in randomProducts" :key="item">
        {{ item.title }}
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
// import 'swiper/swiper.scss'; // core Swiper
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
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
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
    // 前往可能會喜歡頁面
    goProductPage(id) {
      this.$router.push(`/product/${id}`);
      // this.getLookLike();
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log('單一產品資訊 :', res);
          this.isLoading = false;
          this.product = res.data.product; // 賦值
          this.randomProducts = []; // 轉到新頁面要先清空原本的
          this.getLookLike();
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
      console.log(this.$router);
      console.log(id);
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
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
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
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          this.isLoading = false;
          // this.$httpMessageState(res, '加入購物車');
          this.showAlert();
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
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getProduct();
  },
};
</script>
