import Vue from 'vue'
import VueRoter from 'vue-router'
import Axios from 'axios'
import App from './App.vue'
import Home from "./Home.vue"
import Contacto from "./Contacto.vue"
import RestaurantesList from "./RestaurantesList.vue"
import RestauranteTop from "./RestauranteTop.vue"
Vue.use(VueRoter)
Vue.component("home",Home)
Vue.component("contacto",Contacto)
Vue.component("restaurantes-list",RestaurantesList)
Vue.component("restaurante-top",RestauranteTop)

const routes = [
  { path : "/", component : Home },
  { path : "/home", component : Home },
  { path : "/contacto", component : Contacto },
  { path : "/restaurantes-list", component : RestaurantesList },
  { path : "/restaurante-top/:id", name:'restaurante-top'  ,component : RestauranteTop,},

];

const router = new VueRoter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
