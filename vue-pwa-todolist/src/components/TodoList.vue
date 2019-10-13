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
      tmpTodos: [
        {
          id: 1,
          title: 'Create, assign and share task',
          completed: false,
        },
        {
          id: 2,
          title: 'Create and assign projects',
          completed: true,
        },
      ],
      type: 'all',
    };
  },
  methods: {
    getTodoList() {
      return JSON.parse(localStorage.getItem('todos'));
    },
    addTodo(todo: any) {
      if (todo.trim() === '') {
        return;
      }
      this.todos.unshift({
        id: Math.random(),
        title: todo,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    removeTodo(todo: any) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      // this.todos = this.tmpTodos.map((item) => item);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // this.filterTodos(this.type);
    },
    changedCompleted(todo: any) {
      const todoIndex = this.todos.findIndex(obj => obj.id == todo.id);
      this.todos[todoIndex].completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(this.todos));
      // this.filterTodos(this.type);
      // this.todos = this.tmpTodos.map((item) => item);
    },
    filterTodos(filter: any) {
      this.type = filter;
      switch (filter){
        case 'active':
          this.todos = this.tmpTodos.filter((item) => item.completed == false);
          break;
        case 'complete':
          this.todos = this.tmpTodos.filter((item) => item.completed == true);
          break;
        default:
          this.todos = this.tmpTodos.map((item) => item);
      }
    },
  },
  beforeMount() {
    this.todos = this.getTodoList();
  },
};
</script>
