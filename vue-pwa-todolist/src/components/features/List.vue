<template>
  <div class="todo-list-section">
    <h3>Today</h3>
    <ul class="todo-list">
      <li class="todo-item" v-for="index in 5" v-bind:key="index">
        <input type="checkbox" class="hidden-box" v-bind:id="index">
        <label v-bind:for="index" class="check-label">
          <span class="check-label-box"></span>
          <span class="check-label-text">Checkbox {{index}}</span>
        </label>  
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'List',
  });
</script>
