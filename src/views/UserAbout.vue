<template>
  <section>
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img
      class="filters"
      style="
        height: 400px;
        background-image: url(https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80);
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
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
