<template>
  <div class="page-footer">
    <ul class="todos-footer-filter">
      <li class="filter-item" @click="filterTodos('all')" :class="{active:visibility == 'all'}">
        <i class="icon-all"></i>
        <span class="filter-text">All Tasks</span>
      </li>
      <li class="filter-item" @click="filterTodos('active')" :class="{active:visibility == 'active'}">
        <i class="icon-planning"></i>
        <span class="filter-text">Active</span>
      </li>
      <li class="filter-item" @click="filterTodos('complete')" :class="{active:visibility == 'complete'}">
        <i class="icon-completed"></i>
        <span class="filter-text">Completed</span>
      </li>
      <li class="filter-item" @click="removeCompleted('clear')" :class="{active:visibility == 'clear', disabled:!completedTodo}">
        <i class="icon-remove"></i>
        <span class="filter-text">Clear completed</span>
      </li>
      <li class="slide"></li>
    </ul>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'Footer',
    props: ['completedTodo'],
    data() {
      return {
        visibility: 'all',
      };
    },
    methods: {
      filterTodos(filter) {
        this.visibility = filter;
        this.$emit('filterTodos', filter);
      },
      removeCompleted(filter) {
        this.visibility = 'all';
        this.$emit('removeCompleted', filter);
      },
    },
  });
</script>
