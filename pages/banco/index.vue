<template>
    <v-container fluid grid-list-md text-xs-center>
        <v-layout row justify-center>
        <v-flex xs12>
        <v-card>
            
            <v-toolbar class="red lighten-1 darken-3 white--text">
            <h3>Bancos</h3>
                <v-spacer></v-spacer>
                <v-btn fab @click="insItem" dark small class="success">
                    <v-icon dark>add</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text>
                
            <v-flex xs12 xs6>
            <v-text-field
                v-model="buscar"
                append-icon="search"
                label="Buscar"
                single-line
                hide-details
                clearable
            ></v-text-field>
            </v-flex>
            
            <v-data-table
            :headers="headers"
            :items  ="items"
            :search ="buscar"
            v-model ="selected"
            item-key="id_banco"
            :loading="IsLoading"
            rows-per-page-text="Res. x Pag"
            disable-initial-sort
            >

            <template slot="items" slot-scope="item">
                
                <td class="text-xs-left">{{ item.item.nb_banco }}</td>
                <td class="text-xs-left">{{ item.item.id_tipo_banco }}</td>
                <td class="text-xs-left">{{ item.item.id_grupo_banco }}</td>
                <td class="text-xs-center"> 
                    {{ item.item.id_status }}
                     <!-- status
                    <v-switch 
                    v-model="item.item.id_status">
                    </v-switch> 
                    -->
                </td>
                <!--acciones-->
                <td class="text-xs-left">
                    <list-btn @editar="updItem(item.item)" :del="false">
                    </list-btn>
                </td>

            </template>

            <v-alert slot="no-results" :value="true" color="info" icon="info">
                La busqueda "{{ buscar }}" Sin resultados
            </v-alert>

            <template slot="pageText" slot-scope="item">
                {{item.pageStart}} - {{item.pageStop}} de {{item.itemsLength}}
            </template>

            </v-data-table>
            </v-card-text>
            <mensaje></mensaje>

        </v-card>
        </v-flex>
        </v-layout>
    
      <!--  <form-container :nb-accion="nb_accion" :modal="modal" @cerrarModal="cerrarModal">
            <banco-form :accion="accion" :item="item" @cerrarModal="cerrarModal"></banco-form>
        </form-container>

        <dialogo 
            :dialogo="dialogo" 
            :mensaje="'Desea Eliminar el Banco: ' + item.nb_banco "
            @delItem="delItem"
            @delCancel="delCancel"
        >
        </dialogo>
        -->
        <mensaje></mensaje> 
    </v-container>

</template>

<script>
import axios from 'axios'
import withSnackbar from '~/mixins/msjHelper';
import listHelper from '~/mixins/listHelper';

export default {
    mixins:[ listHelper, withSnackbar],
    data () {
    return {
        headers: [
        { text: 'Nombre',   value: 'nb_banco' },
        { text: 'Tipo',     value: 'id_tipo_banco' },
        { text: 'Grupo',    value: 'id_grupo_banco' },
        { text: 'Status',   value: 'id_status'  },
        { text: 'Acciones', value: 'id_status'  },
        ],

    }
    },
    methods:
    {
        list () {
           axios.get('http://127.0.0.1:5400/api/banco')
            .then(respuesta => {
                this.items = respuesta.data;
                this.IsLoading = false
            })
            .catch(error => {
                this.verError(error)
                this.IsLoading = false
            })
        },
        delItem(){
            axios.delete('/api/v1/banco/'+this.item.id_banco)
            .then(respuesta => {

                this.verMsj(respuesta.data.msj)
                this.list();
                this.item = '';
                this.dialogo = false;
                
            })
            .catch(error => {
                this.verError(error)    
            })

        }
    }
}

</script>

<style>

</style>