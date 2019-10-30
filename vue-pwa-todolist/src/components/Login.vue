<template>
  <div class="page-login">
    <div class="login-header">
      <img class="img-covered" src="@/assets/img/logo.png" alt="" />
    </div>
    <div class="container">
      <div class="login-form">
        <ul class="list-auth-tab">
          <router-link tag="li" class="auth-tab" class-active="active" to="login" exact>Login</router-link>
          <router-link tag="li" class="auth-tab" class-active="active" to="signUp" exact>Register</router-link>
        </ul>
        <form @submit.prevent="login()">
          <div class="form-group">
            <input class="form-input" type="email" placeholder="Email" v-model="email" required />
          </div>
          <div class="form-group">
            <input class="form-input" type="password" placeholder="Password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary" @click="login">Login</button>
        </form>
        <div class="login-or">
          <h5 class="pros"><span>Or</span></h5>
        </div>
        <ul class="social-login">
          <li class="social-item">
            <button @click="loginWithFacebook"><i class="fa fa-facebook"></i></button>
          </li>
          <li class="social-item">
            <button @click="loginWithGoogle"><i class="fa fa-google"></i></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.push('/todos');
      }).catch((err) => {
        alert('Opps' + err.message);
      });
    },
    loginWithFacebook() {
      const provide = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provide).then((result) => {
        this.$router.push('/todos');
      }).catch((err) => {
        alert('opps' + err.message);
      });
    },
    loginWithGoogle() {
      const provide = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provide).then((result) => {
        this.$router.push('/todos');
      }).catch((err) => {
        alert('opps' + err.message);
      });
    },
  },
};
</script>
