<template>
  <div v-show="loading" class="lds-ellipsis">
    <div class="ld-item" v-bind:style="[spinnerStyle]"></div>
    <div class="ld-item" v-bind:style="[spinnerStyle]"></div>
    <div class="ld-item" v-bind:style="[spinnerStyle]"></div>
    <div class="ld-item" v-bind:style="[spinnerStyle]"></div>
  </div>
</template>

<script>
export default {
  name: 'InlineLoading',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '#53c2c2',
    },
  },
  data() {
    return {
      spinnerStyle: {
        background: this.color,
      },
    }
  },
}
</script>
