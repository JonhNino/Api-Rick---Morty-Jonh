import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: home" */ '../views/Home.vue')
    }
  },
  {
    path: '/personajes/:id',
    name: 'Personajes',
    component: function () {
      return import(/* webpackChunkName: "PErsonajes" */ '../views/Personajes.vue')
    }
  },
  {
    path: '/pagina',
    name: 'Pagina',
    component: function () {
      return import(/* webpackChunkName: "pagina" */ '../views/Pagina.vue')
    }
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
