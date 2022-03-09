<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0">
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
          <div class="position-relative">
            <router-link class="nav-link fs-5" to="/cart">
              <i class="bi bi-bag text-secondary"></i>
              <div
                class="
                  rounded-circle
                  bg-danger
                  text-light
                  position-absolute
                  py-1
                  px-2
                "
                style="font-size: 6px; top: -7px; right: -10px"
                v-if="cartData.carts"
              >
                {{ cartData.carts.length }}
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
    };
  },
  methods: {
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log('購物車:', res);
          this.cartData = res.data.data;
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('update-cart', () => {
      this.getCart();
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
