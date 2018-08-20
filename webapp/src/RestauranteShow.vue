<template>
    <div id="restaurante-show">
        <h1>Restaurante {{restaurante.nombre}}</h1>
        <p v-text="restaurante.descripcion"></p>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'restaurante-show',
        mounted() {
            this.id = this.$route.params.id;
            axios.get("http://localhost/api-rest/restaurantes-api.php/restaurante/"+this.id)
                .then((response) => {
                    this.restaurante = response.data.data;
                })
        },
        data() {
            return{
                title: 'Detail',
                id : null,
                restaurante : null
            }
        }
    }
</script>
<style lang="scss">
    #restaurante-show {
        p {
            text-align: center;
            font-family: 'Lucida Sans';
        }
    }
</style>

