export default {
  computed:
  {
    msjTimeout(){ return this.$store.getters['gral/mensaje/msjTimeout'] }
  },
  methods: {
    verMensaje (message) 
    {
      this.mostrarBarraMsj(message, 'success')
    },
    verError (error) 
    {
      if(error.hasOwnProperty('response'))
      {
        if(!error.response)
        {
          this.mostrarBarraMsj( error, 'error')
          return
        }

        let status = error.response.status;
        let msj    = 'response';

        switch (status) 
        {
          case 500:
            msj = 'Error interno : ' + error.response.data.message
            break;

          case 404:
            msj = 'Servicio No disponible'
            break;
          
          case 403:
            msj = 'Sin autorizacion'
            break;

          case 401:
            msj = 'Session invalida favor Ingresar nuevamente '
            this.mostrarBarraMsj(msj, 'error')
            window.location.href = '/'
            break;

          case 429:
            for (var idx in error.response.data.errors) 
            {
              msj = msj + error.response.data.errors[idx];
            }
            msj = ( msj != '') ? msj :  'Servicio Ocupado favor Ingresar en unos Minutos'
            break;

          case 422:
            for (var idx in error.response.data.errors) 
            {
              msj = msj + error.response.data.errors[idx];
            }
            break;

          default:
            for (var idx in error.response.data) 
            {
              msj = msj + error.response.data[idx];
            }
            break;
        }
        
        this.mostrarBarraMsj( msj, 'error')

      }else
      {
        this.mostrarBarraMsj(error, 'error')  
      }
      
    },
    limpiarMsj () 
    {
      setTimeout( () => 
      {
        this.$store.commit('gral/mensaje/setMsjShow', false)
        this.$store.commit('gral/mensaje/setMsjText', '')
        this.$store.commit('gral/mensaje/setMsjSubText', '')
      }, this.msjTimeout)
    },
    mostrarBarraMsj (message, color) 
    {
        this.$store.commit('gral/mensaje/setMsjShow', true)
        this.$store.commit('gral/mensaje/setMsjColor', color || 'error')

        if (typeof message === 'string') 
        {
            this.$store.commit('gral/mensaje/setMsjText', message)
            this.limpiarMsj()
            return
        }

        this.$store.commit('gral/mensaje/setMsjText', message.message)

        if (message.response)
        {
          this.$store.commit('gral/mensaje/setMsjSubText',message.response.data.message)
        } 
        
        this.limpiarMsj()
    }
  }
}
