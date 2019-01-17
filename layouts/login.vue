<template>
    <v-app>

        <v-toolbar  color="red" dark >
            <v-toolbar-title v-text="titulo">
            </v-toolbar-title>
        </v-toolbar>

        <v-content>
            <v-container fluid>
            
                <nuxt/>
            
            </v-container>
        </v-content>        

    </v-app>

</template>

<script>
export default {
    data() {
        return{
            titulo: "Bandes"
        }
    }
}
</script>

<style>

</style>
