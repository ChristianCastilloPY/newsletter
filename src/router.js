import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import All from './views/All.vue'
import Tags from './views/Tags.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all',
      // name: 'home',
      component: All
    },
    {
      path: '/tags',
      // name: 'home',
      component: Tags
    },
   
  ]
})
