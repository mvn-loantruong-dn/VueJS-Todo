<template>
  <div class="page-todo">
    <Header :activeTodo="getActiveTodo" />
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
    <Footer @filterTodos="filterTodos" @removeCompleted="removeCompleted" :completedTodo="getCompletedTodo"></Footer>
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
    this.todos = this.getTodoList();
  },
  computed: {
    getActiveTodo() {
      return this.todoClone.filter((item: any) => !item.completed).length;
    },
    getCompletedTodo() {
      return this.todoClone.filter((item: any) => item.completed).length;
    },
  },
  methods: {
    getTodoList() {
      return JSON.parse(localStorage.getItem('todos'));
    },
    addTodo(todo: any) {
      this.todoClone = this.getTodoList();
      if (todo.trim() === '') {
        return;
      }
      this.todoClone.unshift({
        id: Math.random(),
        title: todo,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(this.todoClone));
      this.filterTodos(this.type);
    },
    removeTodo(todo: any) {
      this.todoClone = this.getTodoList();
      this.todoClone = this.todoClone.filter((item: any) => item.id !== todo.id);
      localStorage.setItem('todos', JSON.stringify(this.todoClone));
      this.filterTodos(this.type);
    },
    changedCompleted(todo: any) {
      this.todoClone = this.getTodoList();
      this.todoClone.map((item: any) => {
        if (item.id === todo.id) {
          item.completed = !item.completed;
          return item;
        }
      });
      localStorage.setItem('todos', JSON.stringify(this.todoClone));
      this.filterTodos(this.type);
    },
    filterTodos(filter: any) {
      this.type = filter;
      this.todoClone = this.getTodoList();
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
      this.todoClone = this.getTodoList();
      this.todoClone = this.todoClone.filter((item) => item.completed === false);
      localStorage.setItem('todos', JSON.stringify(this.todoClone));
      this.filterTodos('all');
    },
  },
};
</script>
