import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use VUE to set the VueResource to access apis
Vue.use(VueResource)

// Use VUE to set the router config
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

// Use VUE to change the random color of an element using custom directive
Vue.directive('randomColor', {
  bind(el) {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

new Vue({
  router: router,
  render: h => h(App)

}).$mount('#app')

// required for bootstrap setup
import '@popperjs/core/dist/umd/popper';
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
