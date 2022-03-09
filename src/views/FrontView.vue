<template>
  <FrontNavbar></FrontNavbar>
  <ToastMessages></ToastMessages>
  <router-view></router-view>
  <FrontFooter></FrontFooter>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import emitter from '../methods/emitter';
import ToastMessages from '../components/ToastMessages.vue';

export default {
  components: {
    FrontNavbar,
    ToastMessages,
    FrontFooter,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
