<template>
<Loading :active="isLoading"
  loader="bars"
  color="#236F6B">
</Loading>
  <div class="container mt-10">
    <h2 class="mb-5">購物車</h2>
    <!-- <div class="row p-3">
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
    </div> -->
    <div class="row justify-content-center">
      <div class="col">
        <div class="position-relative mb-5">
        <div class="progress" style="height: 1px;">
          <!-- <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> -->
        </div>
        <button type="button" class="ms-5 position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill"
        style="width: 2rem; height:2rem;">
        1</button>
        <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary disabled rounded-pill"
        style="width: 2rem; height:2rem;">
        2</button>
        <button type="button" class="ms-n5 position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary disabled rounded-pill"
        style="width: 2rem; height:2rem;">
        3</button>
    </div>
    <!-- {{ cartData.carts }} -->
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <!-- 購物車列表 -->
      <!-- <h3 class="bg-secondary text-light my-5 border p-3">Step1.確認購買</h3> -->
      <div class="col-12">
        <div class="cartTable">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cartData.carts">
                <tr v-for="item in cartData.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        :disabled="item.id === loadingItem"
                        @change="updateCart(item)"
                        v-model.number="item.qty"
                      />
                      <div class="input-group-text">/ {{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small v-if="cartData.final_total !== cartData.total" class="text-success"
                      >折扣價：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <!-- <p>總共{{cartData.carts.length}} 筆項目 </p> -->
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cartData.total) }}</td>
              </tr>
              <tr v-if="cartData.final_total !== cartData.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cartData.final_total) }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      product: {},
      loadingItem: '',
      isLoading: false,
      coupon_code: '',
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        // console.log('products:', response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
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
      this.loadingItem = id;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log(res);
          this.loadingItem = '';
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
