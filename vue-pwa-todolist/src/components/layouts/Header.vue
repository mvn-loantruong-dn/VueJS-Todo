<template>
  <div class="page-header">
    <div class="container flex-between">
      <div class="header-left">
        <h3>Hello Brenda!</h3>
        <h5>You have {{numTodo}} tasks</h5>
      </div>
      <div class="header-center">
      </div>
      <div class="header-right">
         <a href="#" class="flex-between">
          <img class="img-covered" src="@/assets/img/user.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'Header',
    props: ['numTodo'],
  });
</script>
