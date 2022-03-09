<template>
<Loading :active="isLoading"></Loading>
  <div class="container">
    <h2>購物車</h2>
    <div class="row p-3">
      <ul class="steps row g-0 list-unstyled mb-4">
        <li class="col-4 border">
          <small class="ls-3">STEP1</small>
          <span>確認訂單</span>
        </li>
        <li class="col-4 border">
          <small class="ls-3">STEP2</small>
          <span>建立訂單</span>
        </li>
        <li class="col-4 border">
          <small class="ls-3">STEP3</small>
          <span>完成訂單</span>
        </li>
      </ul>
    </div>
    <p>總共{{cartData.carts.length}} 筆項目 </p>
    {{ cartData.carts }}
  </div>
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: {},
      },
      products: [],
      isLoadingItem: '',
      isLoading: false,
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          this.cartData = res.data.data;
        });
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          this.isLoadingItem = '';
          // get-cart
          emitter.emit('get-cart');
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
