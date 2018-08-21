<template>
    <div id="restaurante-edit">
        <form @submit.prevent="editarRestaurante">
            <fieldset >
                <legend>Editar restaurante</legend>
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
                    <input type="submit" value="editar restaurante">
                </p>
            </fieldset>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'restaurante-edit',
        mounted() {
            this.id = this.$route.params.id
            axios.get("http://localhost/api-rest/restaurantes-api.php/restaurante/"+this.id)
            .then((response) => {
                this.restaurante = response.data.data;
            })
            .catch((err) => {
                console.error(err)
            })
        },
        data() {
            return{
                id : null,
                title: 'Edit ',
                restaurante : {}
            }
        },
        methods : {
            editarRestaurante() {
                var id = this.id;
                var params = "json=" + JSON.stringify(this.restaurante)
                axios.post("http://localhost/api-rest/restaurantes-api.php/update-restaurante/"+this.id,params)
                .then((response) => {
                    console.log(response)
                    if(response.data.status == "success")
                    this.$router.push("/restaurante/"+id);
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

