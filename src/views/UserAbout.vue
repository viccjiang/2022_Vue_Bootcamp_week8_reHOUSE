<template>
  <section>
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img
      class="filters"
      style="
        height: 200px;
        background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1648375826670.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z8Sswky5%2B5Qs9zBOk353l6grws4lbOlVcclGQujb%2FluG%2FtdJ5cA03bSLskiSdsqQ9y4u9EzL%2FVzcf91ZsdrvCBzRP3Xtd6lQPRgkVuINBQh5%2BPhgtwAKIoMrZx46WcWsr8rmE7gScKmrnk5hGO8XwgJJyQXUHWrQv890wZje8wJkW%2BcrMkRkELlxnkvA1NYep0M0lPNGLjw9Nr%2B%2BaDLucpaaAR0wHg8FdtJaOesdeK%2F8et%2FIUWgkjNWNj2MQGX8u5Q0nh%2F2DvzIe7Evx0CR%2FedaCS%2BCNMPXgM5Y8ucCeMB110cYlO1eEkrl6MASJANN%2B3CVwiieirvmFPa4k3iVEUA%3D%3D);
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        object-fit: cover;
      "
    />
    <div class="card-img-overlay d-flex flex-column justify-content-center align-item-center">
      <h1 class="card-title  text-center fw-bold" >關於 <span class="brandlogos">re.</span><span class="brandlogo">HOUSE </span> </h1>
    </div>
  </div>

    <div class="about container">
      <div class="contentText text-center my-5">
        <p>
          <br />

          成立於 2021 年，疫情打亂生活，<br />
          <br />
          決定開始長期的居家辦公生活，<br />
          <br />
          有了一個屬於自己的空間後，<br />
          <br />
          發現挑選傢俱、搭配風格是多麽療癒的事情，<br />
          <br />
          於是開始經營起自己的居家風格！<br />
          <br />
          也希望把這種經驗分享給，<br />
          <br />
          喜歡打造生活風格的你。<br />
          <br />
        </p>

        <blockquote class="blockquote">
          <p><mark> 我們將帶你進入美好生活，讓你享受每一刻精彩！ </mark></p>
          <p><mark>一起為您打造美好居家生活 ，Make Life Easier！</mark></p>
        </blockquote>

        <router-link to="/products">
          <button type="button" class="btn btn-outline-soft rounded-pill mt-4 py-3 px-5">
            屬於你的美好生活指南
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .filters{
    filter:brightness(.8);
  }
</style>
