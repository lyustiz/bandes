<template>
     <v-dialog v-model="dialogo" persistent max-width="500">
        
        <v-card>
         
        <v-card-title class="warning white--text"><v-icon dark >error</v-icon> Atencion </v-card-title>
        <v-card-text><p>{{ msj}}</p></v-card-text>

        <v-card-actions>

          <v-spacer></v-spacer> 
          <v-tooltip bottom>
                <v-btn slot="activator" fab small @click="confirmar"  class="error">
                    <v-icon>delete</v-icon>
                </v-btn>
            <span>Eliminar</span>
            </v-tooltip>

            <v-tooltip bottom>
                <v-btn  slot="activator" fab small @click="cancelar"  class="warning">
                    <v-icon>reply</v-icon>
                </v-btn>
            <span>Regresar</span>
            </v-tooltip>

        </v-card-actions>
        </v-card>

      </v-dialog>
</template>

<script>
export default {
    props:{
        dialogo: {
            type: Boolean,
            default: false
        },
        mensaje: {
            type: String,
            default: ''
        },
        tipo: {
            type: String,
            default: 'info'
        },
    },
    methods:
    {
        confirmar()
        {
           this.$emit('confirmar'); 
        },
        cancelar()
        {
            this.$emit('cancelar'); 
        },
    },
    computed:
    {
        msj(msj)
        {
            return this.mensaje;
        }

    }
}
</script>

<style>
</style>