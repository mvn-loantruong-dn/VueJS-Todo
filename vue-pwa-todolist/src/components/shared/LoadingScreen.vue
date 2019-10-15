<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="loader-1"></div>
    <div class="loader-2"></div>
    <div class="loader-3"></div>
    <div class="loader-4"></div>
    <div class="loader-5"></div>
  </div>
</template>
<script>
  export default ({
    name: 'LoadingScreen',
    props: ['isLoading'],
  });
</script>
