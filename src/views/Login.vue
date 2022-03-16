<template>
    <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-md-6 d-none d-md-flex bg-image">

                </div>
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5 h-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-5">請先登入</h3>
                                    <p class="text-muted mb-4">請輸入後台管理帳號及密碼</p>
                                    <form class="row justify-content-center" @submit.prevent="signIn">
                                        <div class="mb-3">
                                            <label for="inputEmail" class="sr-only"></label>
                                            <input v-model="user.username" id="inputEmail" type="email" placeholder="請輸入您的帳號" required autofocus class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="inputPassword" class="sr-only"></label>
                                            <input v-model="user.password"  id="inputPassword" type="password" placeholder="請輸入您的密碼" required autofocus class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <!-- <div class="form-check">
                                            <input id="customCheck1" type="checkbox" checked class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div> -->
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-warm btn-block mb-2 rounded-pill shadow-sm">登入</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <!-- <div
    style="height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=100);
    background-size: cover;
    background-position:top center;
    "
  >
    <div class="container">
      <form class="row justify-content-center" @submit.prevent="signIn">
        @submit.prevent 事件觸發 -->
        <!-- <div class="col-md-6 py-5 my-5">
          <h1 class="h3 mb-3  font-weight-normal">請先登入</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control rounded-pill  shadow-sm mt-2 py-2 px-5"
              placeholder="Email address"
              v-model="user.username"
              required
              autofocus
            />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control rounded-pill shadow-sm mt-2 py-2 px-5"
              v-model="user.password"
              placeholder="Password"
              required
            />
          </div> -->

          <!-- <div class="text-end mt-4">
            <button class="btn btn-lg btn-secondary btn-block" type="submit">登入</button>
          </div> -->
          <!-- <div class="text-end mt-4">
            <button
              class="btn btn-lg btn-outline-light rounded-pill shadow-sm mt-2 py-2 px-5 "
              type="submit"
            >
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data;
            document.cookie = `jiangsToken=${token};expires=${new Date(expired)};`;
            this.$router.push('/dashboard/products');
          }
        })
        .catch((error) => {
          console.dir(error.response.data.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .bg-image {
    height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');
    background-size: cover;
    background-position: center center;
}
</style>
