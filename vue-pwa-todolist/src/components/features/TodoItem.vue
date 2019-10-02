<template>
  <div class="todo-item">
    <div class="task">
      <input type="checkbox"
        class="hidden-box"
        :id="id"
        :checked="completed"
        v-model="completed"
        @change="changedCompleted(todo)"/>
      <label :for="id" class="check-label">
        <span class="check-label-box"></span>
        <span class="check-label-text">
          {{title}}
        </span>
      </label>
    </div>
    <div class="delete-icon" @click="deletedTodo(todo)">x</div>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
    };
  },
  methods: {
    deletedTodo(todo: any) {
      this.$emit('removeTodo', todo);
    },
    changedCompleted(todo: any) {
      this.$emit('changedCompleted', todo);
    },
  },
};
</script>
