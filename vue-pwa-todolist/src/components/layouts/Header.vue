<template>
  <div class="page-header">
    <div class="container flex-between">
      <div class="header-left">
        <h3>Hello !</h3>
        <h5>You have {{activeTodo}} <span v-text="activeTodo > 1 ? 'tasks' : 'task'"></span> left</h5>
      </div>
      <div class="header-center">
      </div>
      <div class="header-right">
        <a v-show="user" @click="signoutButtonPressed">Logout</a>
      </div>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase';
  export default {
    name: 'Header',
    props: ['activeTodo'],
    data() {
      return {
        user: '',
      };
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        this.user = user;
      });
    },
    methods: {
      signoutButtonPressed(e) {
        e.stopPropagation();
        firebase.auth().signOut();
        this.$router.push('/login');
      },
    },
  };
</script>
