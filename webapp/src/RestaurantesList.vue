<template>
    <div>
        <ul id="restaurantes-list" v-if="restaurantes.length > 0">
            <li v-for="restaurante in restaurantes">
                <strong>{{restaurante.nombre}}</strong>
                <p>
                    <router-link :to="{name:'restaurante-show',params:{id : restaurante.id}}">Ver</router-link>
                    <router-link :to="{name:'restaurante-edit',params:{id : restaurante.id}}">Editar</router-link>
                    <span v-if="showBorrar != restaurante.id">
                        <a @click="borrarRestaurante(restaurante.id)" style="cursor:pointer;">Eliminar</a>
                    </span>
                    <span v-else>
                        <p>Estas seguro de querer borrarlo ?</p>
                        <button @click="cancelarBorrado()">Cancelar</button>
                        <button @click="confirmarBorrado(restaurante.id)">Confirmar</button>
                    </span>
                </p>
            </li>
        </ul>
        <span v-else>No existen restaurantes</span>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : "restaurantes-list",
    data() {
        return {
            title: "Restaurantes",
            restaurantes : [],
            showBorrar : null
        }
    },
    mounted() {
        this.getRestaurantes()
    },
    methods :{
        getRestaurantes() {
            console.log("Hola")
            axios.get("http://localhost/api-rest/restaurantes-api.php/restaurantes")
                .then((response) => {
                    console.log(response.data.data)
                    this.restaurantes = response.data.data;
                })
        },
        borrarRestaurante(id) {
            this.showBorrar = id;
        },
        cancelarBorrado() {
            this.showBorrar = null;
        },
        confirmarBorrado(id){
            axios.get("http://localhost/api-rest/restaurantes-api.php/delete-restaurante/"+id)
            .then((response) => {
                if(response.data.status == "success"){
                    this.showBorrar = null;
                    this.getRestaurantes();
                }
            })
            .catch(error => {
                console.log(error);
            })
        }

    }
}
</script>
<style lang="scss">
    #restaurantes-list {
        padding: 5px;
        li{
            margin-top: 10px;
            width :30%;
            height: 120px;
            border:  1px solid #ddd;
            background: #eee;
            padding: 20px;
            overflow: hidden;
        }
    }
</style>