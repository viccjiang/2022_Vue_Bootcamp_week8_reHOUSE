<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <!-- 前一頁 -->
      <li class="page-item" :class="{disabled:!pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="updatePage(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- 當前頁面 -->
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
      :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <!-- 下一頁 -->
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="updatePage(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'], // 由外層取得的 pagination，用 pages 接收
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page); // 對外發送事件
    },
  },
};
</script>
