<template>
      <footer class="bg-dark py-4 py-md-5 text-light">
      <div class="container row g-0 mx-auto px-3 fs-7 ls-2
        text-secondary text-center">
        <div><router-link class="navbar-brand brandlogo link-light me-0" to="/"><span class="brandlogos">re.</span>HOUSE </router-link></div>
        <div class="mt-3">本網站僅供個人作品使用，不提供商業用途 <span class="d-none d-md-inline-block"><router-link class="p-0 nav-link link-secondary" to="/login">｜登入後台</router-link> </span></div>
        <div class="mt-3">© 2022 re.HOUSE COPYRIGHT</div>
        <ul class="d-flex  justify-content-center list-unstyled mt-3 mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"><i class="bi bi-github"></i></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="bi bi-messenger"></i></a>
          </li>
        </ul>
      </div>
    </footer>
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
