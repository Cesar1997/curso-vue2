<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/restaurante-add">Crear Restaurante</router-link></li>
      <li><router-link to="/restaurantes-list">Restaurantes</router-link></li>
      <li><router-link :to="{ name: 'restaurante-top', params : {id: 1}}">Destacado</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Restaurantes APP'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
