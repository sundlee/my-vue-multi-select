import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../components/MultiSelect.vue')  },
  {
    path: '/single',
    name: 'Single',
    component: () => import(/* webpackChunkName: "about" */ '../components/SingleSelect.vue')
  },
  {
    path: '/custom',
    name: 'Custom',
    component: () => import(/* webpackChunkName: "about" */ '../components/CustomSelect.vue')
  },
  {
    path: '/array',
    name: 'Array',
    component: () => import(/* webpackChunkName: "about" */ '../components/MultiArraySelect.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
