<template>
  <div id="app">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import "./assets/styling/styles.scss";
</style>
<script>
  import Vue from 'vue';
  import TodoList from './components/TodoList.vue';
  import LoadingScreen from './components/shared/LoadingScreen.vue';

  export default ({
    name: 'app',
    components: {
      LoadingScreen,
    },
    data() {
      return {
        isLoading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  });
</script>
