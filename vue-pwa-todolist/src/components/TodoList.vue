<template>
  <div class="page-todo">
    To do app
    <Header/>
    <Form/>
    <List/>
    <Footer/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';
  import Form from './features/Form.vue';
  import List from './features/List.vue';

  export default ({
    name: 'TodoApp',
    components: {
      Header,
      Footer,
      Form,
      List,
    },
  });
  </script>