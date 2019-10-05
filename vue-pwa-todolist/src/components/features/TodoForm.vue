<template>
  <div class="form-section">
    <form class="form-add-task" @submit.prevent="addTodo()">
      <div class="form-group">
        <span class="input-group-addon">+</span>
        <input type="text"
          v-model="newTodo"
          class="form-input"
          placeholder="Add a task..."/>
      </div>
    </form>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'TodoForm',
  props: ['value'],
  data() {
    return {
      newTodo: this.value,
    };
  },
  methods: {
    addTodo() {
      this.$emit('addTodo', this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>
