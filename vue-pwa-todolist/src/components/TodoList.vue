<template>
  <div class="page-todo">
    <Header />
    <main class="page-main">
      <div class="container">
        <todo-form @addTodo="addTodo"></todo-form>
        <div class="todo-list-section">
          <todo-item
            v-for="(todo, index) in todos"
            :key="todo.id"
            :todo="todo"
            :index="index"
            :completed="todo.completed"
            @removeTodo="removeTodo"
            @changedCompleted="changedCompleted">
          </todo-item>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import TodoForm from './features/TodoForm.vue';
import TodoItem from './features/TodoItem.vue';

export default {
  name: 'TodoApp',
  components: {
    Header,
    Footer,
    TodoForm,
    TodoItem,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'title',
          completed: true,
        },
        {
          id: 2,
          title: 'title',
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(todo: any) {
      if (todo.trim() === '') {
        return;
      }
      this.todos.unshift({
        id: Math.random(),
        title: todo,
        completed: false,
      });
    },
    removeTodo(todo: any) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    changedCompleted(todo: any) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1, todo);
    },
  },
};
</script>
