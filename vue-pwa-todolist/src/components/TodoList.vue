<template>
  <div class="page-todo">
    <Header :activeTodo="activeTodo" />
    <main class="page-main">
      <div class="container">
        <todo-form @addTodo="addTodo"></todo-form>
        <div class="todo-list-section">
          <transition-group name="fade">
            <todo-item
              v-for="(todo, index) in todos"
              :key="todo.id"
              :todo="todo"
              :index="index"
              :completed="todo.completed"
              @removeTodo="removeTodo"
              @changedCompleted="changedCompleted">
            </todo-item>
          </transition-group>
          <transition name="fade">
            <div class="no-task" v-if="!todos.length">
              <img class="img-covered" src="@/assets/img/no-task.png" alt="No task">
              <h2 class="font-bold">No tasks</h2>
              <h4>You have no task</h4>
            </div>
          </transition>
        </div>
      </div>
    </main>
    <Footer @filterTodos="filterTodos" @removeCompleted="removeCompleted" :completedTodo="completedTodo"></Footer>
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
      todos: [],
      todoClone: [],
      type: 'all',
    };
  },
  mounted() {
    return this.todoClone = this.todos;
  },
  computed: {
    activeTodo() {
      return this.todoClone.filter((item: any) => !item.completed).length;
    },
    completedTodo() {
      return this.todoClone.filter((item: any) => item.completed).length;
    },
  },
  methods: {
    addTodo(todo: any) {
      this.todos = this.todoClone;
      if (todo.trim() === '') {
        return;
      }
      this.todos.unshift({
        id: Math.random(),
        title: todo,
        completed: false,
      });
      this.todoClone = this.todos;
      this.filterTodos(this.type);
    },
    removeTodo(todo: any) {
      this.todos = this.todoClone;
      this.todos = this.todos.filter((item: any) => item.id !== todo.id);
      this.todoClone = this.todos;
      this.filterTodos(this.type);
    },
    changedCompleted(todo: any) {
      this.todos.map((item: any) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
          return item;
        }
      });
      this.todoClone = this.todos;
    },
    filterTodos(filter: any) {
      this.type = filter;
      switch (filter) {
        case 'active':
          this.todos = this.todoClone.filter((item) => item.completed === false);
          break;
        case 'complete':
          this.todos = this.todoClone.filter((item) => item.completed === true);
          break;
        default:
          this.todos = this.todoClone.map((item) => item);
      }
    },
    removeCompleted() {
      this.todos = this.todoClone;
      this.todos = this.todoClone.filter((item) => item.completed === false);
      this.todoClone = this.todos;
      this.filterTodos(this.type);
    },
  },
};
</script>
