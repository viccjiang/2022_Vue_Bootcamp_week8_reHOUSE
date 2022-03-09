<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '../methods/emitter';
import ToastMessages from '../components/ToastMessages.vue';
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      check: false,
    };
  },
  components: {
    Navbar,
    ToastMessages,
  },
  // 讓所有元件都可以使用，不用重複注入，內層元件都可以使用外層功能，外層用 provide 內層用 inject 接收
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jiangsToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http
      .post(api, this.user)
      .then((response) => {
        console.log('user/check', response);
        if (response.data.success) {
          this.check = true;
        } else {
          this.$router.push('/login');
        }
      })
      .catch((error) => {
        console.dir(error.response.data.message);
        this.$router.push('/login');
      });
  },
};
</script>
