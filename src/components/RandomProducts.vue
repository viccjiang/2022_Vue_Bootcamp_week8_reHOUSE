<template>
  <Loading :active="isLoading"></Loading>
  <div class="container mb-5">
    <h3 class="text-center">WE RECOMMEND</h3>
    <h4 class="text-center mb-5">推薦商品</h4>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col" v-for="item in randomSelects" :key="item.id">
        <div class="card h-100 img-fluid position-relative">
          <img :src="item.imageUrl" style="
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"  class="img-fluid" alt="...">
              <div class="box bg-danger text-white position-absolute ">
                <p class="m-0"> 推薦 </p>
              </div>
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.description}}</p>
          </div>
        </div>
      </div>
  </div>
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
      randomSelects: [],
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
      // const { category } = this.product;
      // const filterProducts = this.products.filter((item) => item.category === category); // 取得相同品項
      // console.log('filterProducts:', filterProducts);
      const maxSize = this.products.length < 3 ? this.products.length : 3;
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([]);
      console.log(arrSet.size); // 這是類陣列長度
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
        const num = getRandomInt(this.products.length); // 取得品項隨機數字
        arrSet.add(num);
        console.log(arrSet, num);
      }
      arrSet.forEach((index) => {
        this.randomSelects.push(this.products[index]);
      });
      console.log(this.randomSelects);
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
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getProducts();
  },
};
</script>

<style lang="scss">
  .box{
/*   border:1px solid #000; */
  font-size: 20px;
  font-weight: 700;
  width:80px;
  height:auto;
  left:30px;
  justify-content: center;
  text-align:center;
  padding:10px;
}
</style>
