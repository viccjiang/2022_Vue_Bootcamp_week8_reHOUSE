<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1500">
    <!-- Toast 元件 -->
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    // 因為這裡要接收其他元件資料
    // 把其他頁面的 style, title, content 作成物件傳進來
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
