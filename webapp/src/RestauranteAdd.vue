<template>
    <div id="restaurante-add">
        <form @submit.prevent="crearRestaurante">
            <fieldset >
                <legend>Agregar restaurante</legend>
                <p>
                    <label for="">Nombre</label>
                    <input type="text" v-model="restaurante.nombre">
                </p>
                <p>
                    <label for="">Dirección</label>
                    <input type="text" v-model="restaurante.direccion">
                </p>
                <p>
                    <label for="">Descripción</label>
                    <textarea v-model="restaurante.descripcion"></textarea>
                </p>
                <p>
                    <label for="">Precio</label>
                    <select v-model="restaurante.precio">
                        <option value="bajo">Bajo</option>
                        <option value="normal">Normal</option>
                        <option value="alto">Alto</option>
                    </select>
                </p>
                <p>
                    <input type="submit" value="Guardar restaurante">
                </p>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'restaurante-add',
        mounted() {
            this.restaurante.precio = 'normal'
        },
        data() {
            return{
                title: 'Add ',
                restaurante : {}
            }
        },
        methods : {
            crearRestaurante() {
                var params = "json=" + JSON.stringify(this.restaurante)
                axios.post("http://localhost/api-rest/restaurantes-api.php/restaurantes",params)
                .then((response) => {
                    console.log(response)
                    if(response.data.status == "success")
                    this.$router.push("/restaurantes-list");
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style lang="scss">
   
</style>

