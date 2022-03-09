<template>
  <Loading :active="isLoading"></Loading>
  <h2>單一產品</h2>
  <div class="container">
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
          <div class="col-6">
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
          <!-- <div class="col-6">
            <a
              href="./Orders.html"
              class="text-nowrap btn btn-dark w-100 py-2"
              >放入購物車</a
            >
          </div> -->
          <div class="col-6">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-0 border"
            @click="addCart(product.id)"
          >
            加到購物車
          </button>
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
          :alt="`多圖 ${id + 1}`"
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
</template>

<script>
import emitter from '../methods/emitter';

export default {
  data() {
    return {
      product: [],
      isLoading: false,
    };
  },
  methods: {
    grtProduct() {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params; // 這裡要用解構 airbnb 規則
      this.isLoading = true;
      this.$http(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.product = res.data.product; // 賦值
        })
        .catch((err) => {
          console.dir(err.response.data.message);
        });
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res);
        emitter.emit('update-cart'); // 更新購物車數量
      });
    },
  },
  mounted() {
    this.grtProduct();
  },
};
</script>
