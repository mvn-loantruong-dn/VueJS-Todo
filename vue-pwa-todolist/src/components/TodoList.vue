<template>
  <div class="page-todo">
    <Header />
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
              <h4>You have no task to do.</h4>
            </div>
          </transition>
        </div>
      </div>
    </main>
    <Footer @filterTodos="filterTodos"></Footer>
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
      type: 'all',
    };
  },
  methods: {
    getTodoList() {
      return JSON.parse(localStorage.getItem('todos'));
    },
    addTodo(todo: any) {
      var tmp = this.getTodoList();
      if (todo.trim() === '') {
        return;
      }
      tmp.unshift({
        id: Math.random(),
        title: todo,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(tmp));
      this.filterTodos(this.type);
    },
    removeTodo(todo: any) {
      var tmp = this.getTodoList();
      const todoIndex = this.todos.indexOf(todo);
      tmp.splice(todoIndex, 1);
      localStorage.setItem('todos', JSON.stringify(tmp));
      this.filterTodos(this.type);
    },
    changedCompleted(todo: any) {
      var tmp = this.getTodoList();
      const todoIndex = this.todos.findIndex(obj => obj.id == todo.id);
      tmp[todoIndex].completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(tmp));
      this.filterTodos(this.type);
    },
    filterTodos(filter: any) {
      this.type = filter;
      var tmp = this.getTodoList();
      switch (filter){
        case 'active':
          this.todos = tmp.filter((item) => item.completed == false);
          break;
        case 'complete':
          this.todos = tmp.filter((item) => item.completed == true);
          break;
        default:
          this.todos = tmp.map((item) => item);
      }
    },
  },
  beforeMount() {
    this.todos = this.getTodoList();
  },
};
</script>
