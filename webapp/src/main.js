import Vue from 'vue'
import VueRoter from 'vue-router'
import App from './App.vue'
import Home from "./Home.vue"
import Contacto from "./Contacto.vue"
import RestaurantesList from "./RestaurantesList.vue"
import RestauranteTop from "./RestauranteTop.vue"
import RestauranteShow from './RestauranteShow.vue'
import RestauranteAdd from './RestauranteAdd.vue'
import RestauranteEdit from './RestauranteEdit.vue'
Vue.use(VueRoter)
Vue.component("home",Home)
Vue.component("contacto",Contacto)
Vue.component("restaurantes-list",RestaurantesList)
Vue.component("restaurante-top",RestauranteTop)

const routes = [
  { path : "/", component : Home },
  { path : "/home", component : Home },
  { path : "/contacto", component : Contacto },
  { path : "/restaurante-show/:id" , name: 'restaurante-show',component : RestauranteShow},
  { path : '/restaurante-add',component: RestauranteAdd},
  { path : "/restaurantes-list", component : RestaurantesList },
  { path : "/restaurante-top/:id", name:'restaurante-top'  ,component : RestauranteTop,},
  { path : "/restaurante-edit/:id", name: 'restaurante-edit', component : RestauranteEdit}
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
