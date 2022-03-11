<template>
  <footer class="bg-dark py-4 py-md-5 text-light">
      <div class="container row g-0 mx-auto px-3 fs-7 ls-2
        text-secondary text-center">
        <nav class="nav-item mb-4">
          <ul class="row justify-content-between list-unstyled m-0">
              <li class="col-md-2 p-md-0 col-lg-2">
                <a href="#" class="nav-link px-2 text-secondary"> 首頁 </a></li>
              <li class="col-md-2 p-md-0 col-lg-2">
                <a href="#" class="nav-link px-2 text-secondary"> 關於我們 </a>
              </li>
              <li class="col-md-2 p-md-0 col-lg-2">
                <a href="#" class="nav-link px-2 text-secondary"> 常見問答 </a></li>
              <li class="col-md-2 p-md-0 col-lg-2">
                <a href="#" class="nav-link px-2 text-secondary"> 線上商城 </a>
              </li>
              <li class="col-md-2 p-md-0 col-lg-2">
                <a href="#" class="nav-link px-2 text-secondary"> 購物車 </a></li>
          </ul>
        </nav>
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
