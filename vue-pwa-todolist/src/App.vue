<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
<script lang="ts">
  import Vue from 'vue';
  import TodoList from './components/TodoList.vue';
  export default ({
    name: 'app',
    components: {
      TodoList,
    },
  });
  </script>
