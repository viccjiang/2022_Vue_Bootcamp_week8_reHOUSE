import { createApp } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

const options = {
  confirmButtonColor: '#236F6B',
  cancelButtonColor: '#EE847D',
};

app.use(VueAxios, axios);
app.use(VueSweetalert2, options);
app.use(router);
app.component('Loading', VueLoading);
app.mount('#app');
