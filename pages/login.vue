<template>

    <v-layout row align-center justify-center fill-height>
        <v-flex xs12 sm6 >

            
            <v-card class="rounded-10 transparent" >

                <v-card-title class="blue-grey lighten-4">
                        <span class="headline"><v-icon large>account_circle</v-icon> Iniciar Sesión</span>
                </v-card-title>

                <v-form ref="loginForm" v-model="valido">
                <v-card-text>
                <v-layout row wrap>

                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="form.email"
                            :rules="rules.email"
                            label="Correo *"
                            append-icon="mail"
                            color="blue"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12>
                        <v-text-field
                            v-model="form.password"
                            :rules="rules.password"
                            label="Contraseña *"
                            :append-icon ="showPass ? 'visibility_off' : 'visibility'"
                            :type="showPass ? 'text' : 'password'"
                            @click:append="showPass = !showPass"
                            color="blue"
                        ></v-text-field>
                    </v-flex>

                </v-layout>
                </v-card-text>
                </v-form>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="login">Ingresar</v-btn>
                </v-card-actions>
                
            
            </v-card>
            
        </v-flex>
    </v-layout>

</template>

<script>
import rules from '~/mixins/rules'

export default {
    layout: 'login',
    mixins: [rules],
    data () {
        return {
            form: {
                email:    '',
                password: ''
            },
            showPass:       false,
            valido:         false,
            loginLoading:   false,
            siteKey:        "6LdEo20UAAAAAAVJi1AQHQ-6GbpzIYRg7sw4V2d2"
        }
    },
    methods:
    {
        login () 
        {
            if(this.$refs.loginForm.validate()) 
            {
                const credentials = {
                                    'email':    this.form.email,
                                    'password': this.form.password
                                    }
                window.location = '/'
                //this.$store.dispatch(actions.LOGIN, credentials)
             /*   .then(response => 
                {
                    
                })
                .catch(error => 
                {
                    this.showError(error);
                })
                .then(() => 
                {
                    this.loginLoading = false
                })*/
            }
        },
    }

}
</script>

<style>

</style>
