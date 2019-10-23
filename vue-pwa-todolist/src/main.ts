import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyBCJrK65yax-9IfyUSB5iQc9BsyOkS5OSQ',
  authDomain: 'vue-todo-2c282.firebaseapp.com',
  databaseURL: 'https://vue-todo-2c282.firebaseio.com',
  projectId: 'vue-todo-2c282',
  storageBucket: 'vue-todo-2c282.appspot.com',
  messagingSenderId: '561118336749',
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
