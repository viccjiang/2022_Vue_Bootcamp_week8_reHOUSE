<template>
  <section class="intro bg-light pt-10 pt-lg-18 pb-14 pb-lg-18">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-lg-6 mb-2">
          <h3
            class="
              fs-lg-3
              text-secondary text-md-center text-lg-start
              fw-medium
              mb-1
            "
          >
            精心設計、課程多元
          </h3>
          <p class="text-primary fs-5 mb-md-7">
            教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。
          </p>
          <a class="btn-hover-opacity text-secondary" href="./surroungings.html"
            >課程介紹
          </a>
          <!-- <span class=" text-secondary material-icons">
          arrow_right_alt
        </span> -->
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <swiper class="swiper mySwiper" :modules="modules">
            <swiper-slide
              class="ratio ratio-1x1"
              v-for="item in products"
              :key="item.id"
            >
              <div
                style="
                  height: 300px;
                  background-position: center center;
                  background-size: cover;
                "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <!-- <a href="#"><img src="" class="img-hover h-100 card-img"
                  alt="yoga"></a> -->
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper.scss'; // core Swiper

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        this.isLoading = false;
        if (response.data.success) {
          console.log(response.data);
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
  },

  mounted() {
    this.getProducts();
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
