<template>
    <v-snackbar
            :timeout="timeoutMsj"
            :color="colorMsj"
            v-model="verMsj"
            :multi-line="true"
    >
        {{ txtMsj }}
        {{ subTxtMsj }}
        <v-btn dark flat @click.native="cerrar">
          <v-icon>close</v-icon>
        </v-btn>
    </v-snackbar>
</template>

<script>

  export default {
    computed:
    {
      verMsj()
      {
        return this.$store.getters['gral/mensaje/msjShow']
      },
      txtMsj()
      {
        return this.$store.getters['gral/mensaje/msjText']
      },
      subTxtMsj()
      {
        return this.$store.getters['gral/mensaje/msjSubtext']
      },
      colorMsj()
      {
        return this.$store.getters['gral/mensaje/msjColor']
      },
      timeoutMsj()
      {
        return this.$store.getters['gral/mensaje/msjTimeout']
      }
    },
    methods: {
      cerrar () {
        this.$store.commit('gral/mensaje/setMsjShow', false)
      }
    }
  }
</script>