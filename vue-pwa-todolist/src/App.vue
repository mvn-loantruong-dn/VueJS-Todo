<template>
  <div id="app">
    <TodoList/>
    <!-- <HelloWorld/> -->
  </div>
</template>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
<script lang="ts">
  import Vue from 'vue';
  import TodoList from './components/TodoList.vue';
  import HelloWorld from './components/HelloWorld.vue';
  export default ({
    name: 'app',
    components: {
      TodoList,
      // HelloWorld,
    },
  });
</script>
