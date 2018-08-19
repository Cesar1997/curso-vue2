<template>
    <div>
        <p>Welcome {{title}} / {{id_restaurante}}</p>
    </div>
</template>
<script>
    export default {
        name : "restaurante-top",
        mounted() {
            this.id_restaurante = this.$route.params.id
        },
        data() {
            return {
                title: "Restaurante TOP : " ,
                id_restaurante : null
            }
        }
    }
</script>
<style>
    
</style>