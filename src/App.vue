<template>
  <router-view />
</template>

<script>
import emitter from '@/methods/emitter';
import $httpMessageState from '@/methods/pushMessageState';

export default {
  provide() {
    return {
      emitter,
      $httpMessageState,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
