import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Auth from './views/Auth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        authClaims: false
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        authClaims: false
      }
    }
  ]
})
