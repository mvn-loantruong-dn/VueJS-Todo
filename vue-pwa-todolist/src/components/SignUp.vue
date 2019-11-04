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
        <form @submit.prevent="signUp()">
          <div class="form-group">
            <input class="form-input" type="email" placeholder="Email" v-model="email" required />
          </div>
          <div class="form-group">
            <input class="form-input" type="password" placeholder="Password" v-model="password" required />
          </div>
          <button type="submit" class="btn btn-primary" @click="signUp">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';
export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.$router.replace('login');
      }).catch((err) => {
        alert('Opps' + err.message);
      });
    },
  },
};
</script>
