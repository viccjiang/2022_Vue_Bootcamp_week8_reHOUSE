<template>
  <section>
    <div id="carouselExampleCaptions" class="" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <div
            class=""
            style="height: 90vh; background-image: url(https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
          background-size: cover;
          background-position:center center;
          background-attachment: fixed
          "
          ></div>
          <div class="carousel-caption  d-md-block pb-10">
            <h1 style=" text-shadow: black 0em 0em 0.1em " class="indexBannerText mb-3">
              讓你的居家生活風格更加獨特
            </h1>
            <p style="text-shadow: black 0em 0em 0.1em" class="mb-4 fs-5 text">
              進入美好生活，創造你的生活美學
            </p>

            <router-link to="/products">
              <button type="button" class="btn btn-outline-light rounded-pill mt-2 py-3 px-5">
                SHOP NOW
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light p-4 ">
      <div class="container">
        <div id="carouselExampleControls" class="slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-4">
                <div class="col-md-6 text-center py-3">
                  <h3>re.HOUSE，Make Life Easier</h3>
                  <div class="textarea my-3 text-secondary" style="line-hight=1.5;">
                    <p>我們都對美好生活有著無限憧憬，</p>
                    <p>偶爾需要來點療癒的事物來妝點你的生活質感，</p>
                    <p>家，打造美好居家生活的起點，</p>
                    <p>re.HOUSE 帶你進入美好生活，</p>
                    <p>幫你找到最適合的傢俱，讓你享受每一刻精彩。</p>
                  </div>
                  <p><small>—  re.HOUSE，您的居家最佳夥伴  —</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-5">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat.”
                  </p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-5">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p class="my-5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat.”
                  </p>
                  <p><small>—Lorem ipsum dolor sit amet.—</small></p>
                </div>
              </div>
            </div>
          </div>
          <!-- <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-0 mt-md-5">
        <div class="col-md-4 mt-4 mt-md-0">
          <div class="card border-0 mb-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4 class="mt-3">時尚簡約桌櫃組</h4>
              <p class="card-text text-secondary mb-0">
                簡約風格打造你的工作環境，讓生活更簡單！
              </p>
              <router-link to="/products">
                <button type="button" class="btn btn-outline-soft  rounded-pill mt-4 py-2 px-5 stretched-link">
                  立即前往
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 mt-md-0">
          <div class="card border-0 mb-4 mb-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4 class="mt-3">客廳居家沙發</h4>

              <p class="card-text text-secondary mb-0">
                舒適色調與多款式選擇，讓家更有溫度！
              </p>

              <router-link to="/products">
                <button type="button" class="btn btn-outline-soft  rounded-pill mt-4 py-2 px-5 stretched-link">
                  立即前往
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-4 mt-md-0">
          <div class="card border-0 mb-4 mb-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1465224414649-ceb7f1db3999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4 class="mt-3">舒適好坐椅子</h4>

              <p class="card-text text-secondary mb-0">
                一張好的椅子，就能讓你享受一個人的時光。
              </p>

              <router-link to="/products">
                <button type="button" class="btn btn-outline-soft  rounded-pill mt-4 py-2 px-5 stretched-link">
                  立即前往
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-0 mb-md-7">
      <div class="row bg-light">
        <div class="col-md-6 g-0">
          <img
            src="https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center bg-light">
          <h4 class="mt-4">嚴選家居</h4>
          <p class="text-secondary">
            收納櫃組、客廳家俱到寢具一應俱全。 <br />
            WFH居家必備，打造屬於自己的角落。
          </p>
        </div>
      </div>
      <div class="row bg-light flex-row-reverse justify-content-between ">
        <div class="col-md-6 g-0">
          <img
            src="https://images.unsplash.com/photo-1571570703598-39eb580a0329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">防疫樂活</h4>
          <p class="text-secondary">
            WFH 盛行，選擇最適合你風格的工作環境，<br />
            搭配家中擺設與家俱風格，增添生活樂趣。
          </p>
        </div>
      </div>
      <div class="row bg-light">
        <div class="col-md-6 g-0">
          <img
            src="https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center bg-light">
          <h4 class="mt-4">嚴選家居</h4>
          <p class="text-secondary">
            收納櫃組、客廳家俱到寢具一應俱全。 <br />
            WFH居家必備，打造屬於自己的角落。
          </p>
        </div>
      </div>
    </div>
    <!-- sub -->
    <!-- <div class="bg-light py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between
        align-items-md-center align-items-start"
        >
          <p class="mb-0 fw-bold">
            立即訂閱，獲取最新優惠
          </p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                取得優惠
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- footer -->
    <!-- <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <div>
            <router-link class="navbar-brand brandlogo link-light" to="/"><span class="brandlogos">re.</span>HOUSE </router-link>
          </div>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#" class="text-white ms-3"><i class="bi bi-messenger"></i></a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between
          align-items-md-end align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">rehouse@gmail.com</p>
          </div>
          <p class="mb-0">© 2021 re.HOUSE All Rights Reserved. 僅供練習使用</p>
        </div>
      </div>
    </div> -->
  </section>
  <div class="bg-soft text-white py-2 py-md-5">
  <div class="container px-6 px-md-9">
    <ul class="row list-unstyled gx-md-9">
      <li class="col-md-4 mb-5 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-center justify-content-lg-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
          <i class="bi bi-cart3 mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5">Free</h3>
            <p class="mb-0">所有會員滿 $1000 免運</p>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-5 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-center  justify-content-lg-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
           <i class="bi bi-gift mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5">Bonus</h3>
            <p class="mb-0">立即享新客戶優惠折扣碼</p>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-5 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-center  justify-content-lg-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
           <i class="bi bi-credit-card mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5 text-nowrap">Payment Method</h3>
            <p class="mb-0">多元支付方式</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import '../../node_modules/aos/dist/aos.css';
import 'aos/dist/aos.css';

export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // },
  created() {
    // AOS.init();
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>

<style lang="scss">
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
