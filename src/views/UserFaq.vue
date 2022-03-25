<template>
  <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img
      class="filters"
      style="
        height: 400px;
        background-image: url(https://images.unsplash.com/photo-1596702337959-2fcaf14d21e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
        background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
      "
    />
    <div class="card-img-overlay d-flex flex-column justify-content-center align-item-center">
      <h1 class="card-title text-center fw-bold">常見問題</h1>
    </div>
  </div>
  <div class="container mb-5">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            1. 購物方式
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>1. 無須登入即可購買</li>
              <li>2. 註冊會員購買</li>
              <hr />
              <li>註冊會員方式 :</li>
              <li>Facebook 註冊</li>
              <li>LINE 註冊</li>
              <li>Email 註冊</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            2. 付款方式
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>信用卡一次付清</li>
              <li>信用卡分期三個月(0利率)</li>
              <li>信用卡分期六個月(3.5%利率)</li>
              <hr />
              <li>實際分期利率請洽各發卡銀行。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            3. 運費計算
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>除了大型商品外，商品皆為免運費</li>
              <li>大型商品運送相關說明請詳閱產品相關資訊欄</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse4"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse4"
          >
            4. 商品保固
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading4"
        >
          <div class="accordion-body">
            <p>保固相關說明請詳閱產品相關資訊欄</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse5"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse5"
          >
            5. 七天鑑賞期
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading5"
        >
          <div class="accordion-body">
            <p>
              依照消費者保護法的規定，享有到貨日起7天猶豫期的權利但(猶豫期並非試用期)
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse6"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse6"
          >
            6. 退貨說明
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse6"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading6"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>所退回之商品必須是全新狀態，並且完整包裝。</li>
              <li>
                故請保持退貨商品原配件、贈品、原廠包裝、所有附隨文件或資料的完整性，切勿缺漏、遺失、毀損。
              </li>
              <li>只接受訂購退貨，非瑕疵品不得換貨。</li>
              <li>七天內若有疑慮可向客服申請退貨，將由專人為您服務。</li>
              <li>退貨後3日內將由指定物流前往收件。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading7">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse7"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse7"
          >
            7. 退款說明
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse7"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading7"
        >
          <div class="accordion-body">
            <p>收到退貨商品，確認產品無誤，將於 7 個工作天退還該筆款項。</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading8">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse8"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse8"
          >
            8. 瑕疵商品及處理
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse8"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading8"
        >
          <div class="accordion-body">
            <ul class="list-unstyled">
              <li>1. 瑕疵定義：大量髒汙、嚴重影響產品使用及外觀者。</li>
              <li>
                2. 不符合瑕疵之定義：誤差 0.5cm內 髒污、尺寸 5cm
                誤差、螢幕色差、材質味道等。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading9">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse9"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse9"
          >
            9. 工作日
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse9"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading9"
        >
          <div class="accordion-body">
            <p>
              大型商品須另行約定交貨，其他商品皆為下單付款後 7 個工作日內出貨
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading10">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapse10"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapse10"
          >
            10. 客服諮詢
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapse10"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-heading10"
        >
          <div class="accordion-body">
            <p>線上專人服務：星期一至星期日 / 11:00AM - 8:00PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
