<template>
  <div class="page-todo">
    <Header :activeTodo="getActiveTodo" />
    <main class="page-main">
      <div class="container">
        <todo-form @addTodo="addTodo"></todo-form>
        <div class="todo-list-section">
          <transition name="fade">
            <div class="no-task" v-if="!todos.length">
              <img class="img-covered" src="@/assets/img/no-task.png" alt="No task">
              <h3 class="font-bold">No tasks</h3>
              <h5>You have no task</h5>
            </div>
          </transition>
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
        </div>
      </div>
    </main>
    <Footer @filterTodos="filterTodos" @removeCompleted="removeCompleted" :completedTodo="getCompletedTodo"></Footer>
  </div>
</template>
<script>
import Vue from 'vue';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import TodoForm from './features/TodoForm.vue';
import TodoItem from './features/TodoItem.vue';
import firebase from 'firebase';
import { db } from '../main';

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
      userId: null,
      type: 'all',
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/login');
      } else {
        this.userId = firebase.auth().currentUser.uid;
        this.todos = this.getTodoList() || [];
      }
    })
  },
  computed: {
    getActiveTodo() {
      return this.todos.filter((item) => !item.completed).length;
    },
    getCompletedTodo() {
      return this.todos.filter((item) => item.completed).length;
    },
  },
  methods: {
    getTodoList() {
      db.collection('todos').where('uid', '==', this.userId).get()
        .then((querySnapshot) => {
          this.todos = [];
          querySnapshot.forEach((doc) => {
            this.todos.push({
              id: doc.id,
              title: doc.data().title,
              completed: doc.data().completed,
            });
        });
      });
      return this.todos;
    },
    addTodo(todo) {
      if (todo.trim() === '') {
        return;
      }
      db.collection('todos').add({
        uid: this.userId,
        title: todo,
        completed: false,
      }).then(() => {
        this.todos = this.getTodoList();
      });
      this.todo = '';
    },
    removeTodo(todo) {
      db.collection('todos').doc(todo.id).delete()
      .then(() => {
        this.todos = this.getTodoList();
      }).catch((err) => {
        alert('Error removing document: ', err);
      });
    },
    changedCompleted(todo) {
      db.collection('todos').doc(todo.id)
      .update({
        completed: !todo.completed,
      }).then(() => {
        this.todos = this.getTodoList();
      });
    },
    filterTodos(filter) {
      this.type = filter;
      this.todoClone = this.getTodoList() || [];
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
      db.collection('todos').where('completed', '==', true).get()
      .then((querySnapshot) => {
        const batch = db.batch();
        querySnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });
        this.filterTodos('all');
        return batch.commit();
      });
    },
  },
};
</script>
