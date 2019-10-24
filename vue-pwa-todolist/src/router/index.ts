import Vue from 'vue';
import Router from 'vue-router';

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
      redirect: '/todos',
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
    },
  ],
});

export default router;
