<template>
  <div class="page-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item"><button class="toolbar-btn active"><i class="i-clean-filter"></i> All Tasks </button></li>
      <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks"></i> Active </button></li>
      <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks-done"></i> Completed </button></li>
    </ul>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'Footer',
  });
</script>
