<template>
  <section>
    <div id="carouselExampleCaptions" class="" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <div
            class=""
            style="height: 90vh; background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1648375267766.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KX32JuSPo1yFQ4SnKO0RzGIBbFJS4%2FlEVBYdB9dnbQYY5KydqOXmKe5iLmDDIZcyGdaYk2gt6UKvdQUCOQnKKx5QI9g635DWuPDdQXvCvEfhCrjylQ0V6Phhyntr1%2BLuC%2FxWGtH8JXz1aqTW%2FPlrK2NPiEzaCOjH9dfvTTxBslcuECVvK5rUtPfUSBOpPzKO0BNliHdElDYrZR%2BX7ShR2CvsjV8RPyut511nhVTJTaKlajwTEIX1SKegjZbVj97zNFfjcMtiMcMtSIz3965o1s24%2B3%2Bu6WZZYqZDSeWadtBuLS07my9BOjwlivWiDrsc%2F1%2BI18lpKZxyAnOxu6IWfg%3D%3D);
          background-size: cover;
          background-position:center center;
          object-fit: cover;
          "
          >
          </div>
          <div class="carousel-caption  d-md-block pb-5">
            <h1 style=" text-shadow: black 0em 0em 0.1em " class="indexBannerText mb-3 ">
              居家生活風格更加獨特
            </h1>
            <p style="text-shadow: black 0em 0em 0.1em" class="mb-4 fs-5 text">
              美好生活，創造你的生活美學
            </p>

            <router-link to="/products">
              <button type="button" class="btn btn-outline-light rounded-pill mt-2 py-3 px-5">
                SHOP NOW
              </button>
            </router-link>
            <!-- arrow -->
            <div class="arrow arrow_bounce d-flex justify-content-center align-item-center mb-5"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light p-4 mb-5 ">
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
          </div>
        </div>
      </div>
    </div>
    <div class="container">
    <h3 class="text-center">TOP POPULAR</h3>
    <h4 class="text-center mb-4 border-bottom pb-3">精選商品</h4>
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
    <div class="container mb-5">
      <div class="row g-0 bg-light">
        <div class="col-md-6 ">
          <img
            src="https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-6 m-auto text-center bg-light">
          <h4 class="mt-4">嚴選家居</h4>
          <p class="text-secondary">
            收納櫃組、客廳家俱到寢具一應俱全。 <br />
            WFH居家必備，打造屬於自己的角落。
          </p>
        </div>
      </div>
      <div class="row g-0 bg-light flex-row-reverse justify-content-between ">
        <div class="col-md-6 ">
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
      <!-- <div class="row g-0 bg-light">
        <div class="col-md-6 ">
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
      </div> -->
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
  <!-- <RandomProducts></RandomProducts> -->
  <RecommendSwiper></RecommendSwiper>
  <div class="bg-soft text-white py-2 py-md-5">
  <div class="container px-6 px-md-9">
    <ul class="row list-unstyled mb-0 gx-md-9">
      <li class="col-md-4 mb-0 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-start justify-content-md-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
          <i class="bi bi-cart3 mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5">Free</h3>
            <p class="mb-0">所有會員立即享免運</p>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-0 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-start  justify-content-md-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
           <i class="bi bi-gift mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5">Bonus</h3>
            <p class="mb-0">立即享新客戶優惠折扣碼</p>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-0 mb-md-0 py-2">
        <div class="d-flex d-md-column flex-md-column flex-lg-row align-items-center justify-content-start  justify-content-md-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
           <i class="bi bi-credit-card mb-md-3 mb-lg-0 display-5"></i>
          <div class="ms-4 ms-md-0 ms-lg-4 text-md-center text-lg-start">
            <h3 class="h5 text-nowrap">Payment</h3>
            <p class="mb-0">多元支付方式</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<!-- 左側浮動廣告 -->
<div class="hd">
  <div id="darkBack"></div>
  <div id="popUp">
    <div id="close" class="btn-close float-end mt-2 me-2"></div>
    <div id="new"><span>新品上市</span></div>
    <h2>WFH居家必備，年度鉅獻</h2>
    <p class="m-0 text-center">結帳不限金額，立即享五折</p>
    <br />
    <!-- <a href="#" target="_blank" class="nav-link link-light newbtn">大家都在買</a> -->
    <!-- <div class="toast-body"> -->
    <div class="d-flex justify-content-center d-flex align-items-center">
      <img src="https://pic.sopili.net/pub/emoji/noto-emoji/png/128/emoji_u1f449.png" width=20 height=20>
      <span class="ms-2" id="content"> 2022</span>
      <button @click="copyCouponCode" class="btn btn-outline-soft ms-3 btn-sm" id="copyBT">複製優惠碼</button>
    </div>
    <!-- </div> -->
  </div>
  <div class="" id="plus"><span >新品上市</span></div>
</div>
<!-- GoTop -->
<div class="footer">
    <div class="gotop btn border" v-show="gotop" @click="toTop"><i class="px-1 bi bi-chevron-up"></i></div>
</div>

</template>

<script>
/* global $ */
// @ is an alias to /src
// import RandomProducts from '@/components/RandomProducts.vue';
import RecommendSwiper from '@/components/RecommendSwiper.vue';
// import '../../node_modules/aos/dist/aos.css';
import 'aos/dist/aos.css';

const storageMethods = {
  // 存檔
  save(favorite) {
    // 丟進來的東西先做轉型 JSON.stringify
    const favoriteString = JSON.stringify(favorite);
    // hexFavorite 再做寫入，也就是把東西存進去
    localStorage.setItem('hexFavorite', favoriteString);
  },
  // 取出
  get() {
    // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};

export default {
  name: 'Home',
  components: {
    // RandomProducts,
    RecommendSwiper,
  },
  data() {
    return {
      myFavorite: storageMethods.get() || [],
      gotop: false,
    };
  },
  methods: {
    copyCouponCode() {
      const range = document.createRange();
      range.selectNode(document.getElementById('content'));
      const selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      this.showAlert();
      console.log('複製成功！');
    },
    handleScroll() {
      const scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolltop > 30) {
        this.gotop = true;
      } else {
        this.gotop = false;
      }
      // scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      document.getElementById('app').scrollIntoView();
      // const top = document.documentElement.scrollTop || document.body.scrollTop;
      // 實現滾動效果
      // console.log(top);
      // const timeTop = setInterval(() => {
      //   document.body.scrollTop = document.documentElement.scrollTop;
      //   document.body.scrollTop = top;
      //   document.body.scrollTop -= 50;
      //   if (top <= 0) {
      //     clearInterval(timeTop);
      //   }
      // }, 10);
    },
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '複製成功',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B',
      });
    },
  },
  mounted() {
    // AOS.init();
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    window.addEventListener('scroll', this.handleScroll, true);
    this.toTop();
    $(document).scroll(() => {
      const scroll = $(this).scrollTop();
      if (scroll > 150) {
        $('#popUp').css('margin-left', '-425px');
        $('#plus').css('margin-left', '0px');
      } else {
        $('#plus').css('margin-left', '0px');
        $('#popUp').css('margin-left', '-425px');
      }
    });
    $('#plus').click(() => {
      $('#popUp').css('margin-left', '0px');
      $('#plus').css('margin-left', '-425px');
    });
    $('#close').click(() => {
      $('#popUp').css('margin-left', '-425px');
      $('#plus').css('margin-left', '0px');
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,600;0,700;1,500;1,600&display=swap');

.footer .gotop {
  text-align: center;
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: #236F6B;
  color: #FFF;
}

.footer .gotop:hover {
  background-color: #fff;
  color: #236F6B;
}

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
a {
  text-decoration: none;
}
.hd {
  background-size: cover;
  background-position: center;
  height: 0 auto;
  width: 100%;
}

.arrow{
    text-align: center;
    margin:30px auto;
    width:0px;
    height:0px;
    overflow:hidden;
    border-width:10px;
    border-color:#FFF transparent transparent transparent;
    border-style:solid dashed dashed dashed;
}

.arrow_bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
   animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

#popUp {
  position: fixed;
  max-width: 350px;
  height: 170px;
  margin-bottom: 100px;
  background: rgba(236, 240, 241, 0.8);
  /*   border: 7px solid #fff; */
  bottom: -5%;
  margin-left: 0;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 1000;
  border-radius: 0px 10px 10px 0;
}
#new span {
  background: #ee847d;
  position: absolute;
  color: #FFF;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: -15px;
}
#popUp .close {
  color: #464646;
  right: 10px;
  top: 8px;
  position: absolute;
  font-size: 14px;
  cursor: pointer;
}
#popUp h2 {
  font-size: 16px;
  color: #464646;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
  margin-bottom: 10px;
}
.newbtn {
  margin: 0 auto;
  text-align: center;
  right: 0;
  left: 0;
  position: absolute;
  width: 120px;
  font-size: 15px;
  color: #fff;
  border-bottom: 2px solid #18729f;
  background: #236f6b;
  border-radius: 4px;
  padding: 10px 0;
}
#plus {
  position: fixed;
  color: #fff;
  bottom: 15%;
  font-size: 15px;
  margin-left: -425px;
  -webkit-transition: all 1.25s ease;
  -moz-transition: all 1.25s ease;
  -o-transition: all 1.25s ease;
  transition: all 1.25s ease;
  cursor: pointer;
  text-align: left;
  letter-spacing: 5px;
  z-index: 1000;
}
#plus span {
  position: absolute;
  margin-top: 26px;
  left: 8px;
  letter-spacing: 5px;
  line-height: 25px;
}
#plus::after {
  content: "";
  display: block;
  display: relative;
  border-top: 90px solid #236f6b;
  border-bottom: 50px solid #236f6b;
  border-left: 40px solid #236f6b;
  border-radius: 0px 10px 10px 0;
}
@media all and (max-width: 900px) {
  #popUp {
    margin-left: -425px;
  }
  #plus {
    margin-left: 0px;
  }
}
</style>
