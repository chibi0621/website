<template>
  <nav aria-label="Page navigation example" class="justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link color" href="#" aria-label="Previous">
          <span class="fw-bold" aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page">
        <a class="page-link color" href="#" @click.prevent="updatePage(page)">
            {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link color" href="#" aria-label="Next">
          <span class="fw-bold" aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import '@/assets/dist/dashboard/component/pagination.scss';

export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
  },
};
</script>
