<template>
  <Loading :active="isLoading"></Loading>
    <div class="container mt-5">
    <h2 v-if="!order.is_paid" class="mb-10 text-center text-soft">STEP.2 建立訂單</h2>
    <h2 v-else class="mb-10 text-center text-soft">STEP.3 完成訂單</h2>

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
        <button type="button" class="ms-5 position-absolute top-0 start-0 translate-middle btn btn-sm btn-soft rounded-pill"
        style="width: 3rem; height:3rem;">
        step 1</button>
        <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-soft rounded-pill"
        style="width: 3rem; height:3rem;">
        step 2</button>
        <button type="button" v-if="!order.is_paid" class="ms-n5 position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary disabled rounded-pill"
        style="width: 3rem; height:3rem;">
        step 3</button>
        <button type="button" v-else class="ms-n5 position-absolute top-0 start-100 translate-middle btn btn-sm btn-soft  rounded-pill"
        style="width: 3rem; height:3rem;">
        step 3</button>
    </div>
    <!-- {{ cartData.carts }} -->
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="mb-5 row flex-column flex-md-row justify-content-center">
      <div class="col-12 col-md-6">
        <form class="col" @submit.prevent="payOrder">
          <table class="table align-middle col-md-6">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="text-end">{{ $filters.currency(item.final_total) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(order.total) }}</td>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
      <div class="col-12 col-md-6">
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="checkBtn d-flex justify-content-end">
          <router-link class="btn btn-outline-secondary" to="/products"
            >繼續購物</router-link
          >
          <div v-if="order.is_paid === false">
            <button class="btn btn-soft" @click="payOrder">確認付款去</button>
            <!-- 再做一個完成訂購頁面 -->
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
      order: {
        user: {},
      },
      orderId: '',
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
          console.log('購物車：', res);
          this.cartData = res.data.data;
        });
    },
    getOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.order.is_paid = true;
          console.log(this.order.is_paid);
          this.getOrder();
          this.getCarts();
          emitter.emit('update-cart'); // 更新購物車數量
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>
