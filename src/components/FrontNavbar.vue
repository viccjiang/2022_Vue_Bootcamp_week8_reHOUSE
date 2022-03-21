<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand brandlogo" to="/"><span class="brandlogos">re.</span>HOUSE </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center justify-content-center mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-flex align-items-center flex-column flex-lg-row">
          <div>
            <router-link class="nav-link fs-5 position-relative text-secondary" to="/">
              <i class="bi bi-heart"></i
            >
                          <div
                class="
                  badge
                  rounded-pill
                  bg-danger
                  text-light
                  position-absolute
                  top-0
                  start-50
                "
                style = "font-size: 10px;"
                v-if = "favoriteNum != 0"
              >
                <!-- 購物車品項數量 (不重複) -->
                <!-- {{ cartData.carts.length }} -->
                <!-- 購物車品項數量總數 (重複) -->
                {{ favoriteNum }}
              </div>
            </router-link>
          </div>
          <div>
            <router-link class="nav-link fs-5 position-relative" to="/cart">
              <i class="bi bi-bag text-secondary"></i>
              <div
                class="
                  badge
                  rounded-pill
                  bg-danger
                  text-light
                  position-absolute
                  top-0
                  start-50
                "
                style = "font-size: 10px;"
                v-if = "cartsLength != 0"
              >
                <!-- 購物車品項數量 (不重複) -->
                <!-- {{ cartData.carts.length }} -->
                <!-- 購物車品項數量總數 (重複) -->
                {{ cartsLength }}
              </div>
            </router-link>
          </div>
          <div>
            <router-link class="nav-link fs-5 text-secondary" to="/dashboard/products">
              <i class="bi bi-person-circle"></i
            ></router-link>
          </div>
        </ul>
      </div>
      <!-- <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
      </button> -->
    </div>
  </nav>
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
      cartsLength: 0,
      favoriteNum: 0,
    };
  },
  methods: {
    updateCartNum() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cartsLength = res.data.data.carts.length; // 購物車 icon 判斷
          if (res.data.success) {
            let totalQty = 0;
            this.cartsLength = res.data.data.carts.forEach((item) => {
              // console.log(item);
              totalQty += item.qty;
            });
            this.cartsLength = totalQty;
            console.log('購物車總數,', this.cartsLength);
          } else {
            console.log('購物車資料異常');
          }
        });
    },
    // getCart() {
    //   this.$http
    //     .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
    //     .then((res) => {
    //       console.log('Navbar icon 目前購物車:', res);
    //       this.cartData = res.data.data;
    //     });
    // },
    updateFavoriteNum() {
      const arr = JSON.parse(localStorage.getItem('hexFavorite'));
      this.favoriteNum = arr ? arr.length : 0;
      console.log('目前我的最愛數量:', this.favoriteNum);
    },
  },
  mounted() {
    // this.getCart();
    // emitter.on('update-cart', () => {
    //   this.getCart();
    // });
    this.updateCartNum();
    emitter.on('update-cart', () => {
      this.updateCartNum();
    });
    this.updateFavoriteNum();
    emitter.on('update-favorite', () => {
      this.updateFavoriteNum();
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');

.brandlogo{
  font-family:'Expletus Sans', cursive;
  font-weight: Bold ;
  font-size: 42px;;
}

.brandlogos{
  font-family:'Expletus Sans', cursive;
  font-weight: 400;
  font-size: 30px;
  font-style: italic;
}

</style>
