<template>
  <div class="page-footer">
    <div class="container">
      <ul class="todos-footer-filter">
        <li class="filter-item" @click="filterTodos('all')" :class="{active:isActive == 'all'}">
          <i class="icon-all"></i>
          <span class="filter-text">All Tasks</span>
        </li>
        <li class="filter-item" @click="filterTodos('active')" :class="{active:isActive == 'active'}">
          <i class="icon-planning"></i>
          <span class="filter-text">Active</span>
        </li>
        <li class="filter-item" @click="filterTodos('complete')" :class="{active:isActive == 'complete'}">
          <i class="icon-completed"></i>
          <span class="filter-text">Completed</span>
        </li>
        <li class="slide"></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'Footer',
    data() {
      return {
        isActive: 'all',
      };
    },
    methods: {
      filterTodos(filter) {
        this.isActive = filter;
      },
    },
  });
</script>
