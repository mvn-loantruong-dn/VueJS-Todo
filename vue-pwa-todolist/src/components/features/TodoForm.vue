<template>
  <div class="form-section">
    <form class="form-add-task" @submit.prevent="addTodo()">
      <div class="form-group">
        <input type="text" v-model="newTodo" class="form-input" placeholder="Add a task..."/>
        <button type="submit" class="input-group-addon" @click="addTodo()"><i class="icon-add"></i></button>
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
