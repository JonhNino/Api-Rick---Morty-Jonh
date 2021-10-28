import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Importacion para axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
///Importacion Boostrap
import  BootstrapVue  from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

