<template>
  <div class="form-section">
    <h3>Today</h3>
    <div class="add-icon">+</div>
    <form class="form-add-task">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Add new task"/>
      </div>
      <button type="submit" class="btn btn-primary">Add new task</button>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Form',
};
</script>
