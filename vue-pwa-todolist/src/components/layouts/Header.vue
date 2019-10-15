<template>
  <div class="page-header">
    <div class="container flex-between">
      <div class="header-left">
        <h3>Hello Brenda!</h3>
        <h5>You have {{activeTodo}} <span v-text="activeTodo > 1 ? 'tasks' : 'task'"></span> left</h5>
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
<script>
  export default ({
    name: 'Header',
    props: ['activeTodo'],
  });
</script>
