import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('../components/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue'),
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('../components/TodoList.vue'),
      meta: {
        auth: true,
      },
    },
  ],
});
export default router;
