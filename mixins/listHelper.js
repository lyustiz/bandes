export default {
    created() {
        this.items  = this.list();
    },
    data() {

        return {

            basePath: '/api/v1/',
            id_usuario: 1, //this.$store.getters.user.id_usuario,
            IsLoading: true,
            modal: false,
            selected: [],
            items: '',
            item:  '',
            buscar: '',
            accion: '',
            nb_accion: '',
            verDialogo: false,
        }
    },
    filters: {

        formDate: function (value) {

            if (!value) return ''
            value = value.toString();
            return value.substr(8, 2)+'/'+value.substr(5, 2)+'/'+value.substr(0, 4);
        },
        formatDateTime: function (value) {

            if (!value) return ''
            value = value.toString();
            return value.substr(8, 2)+'/'+value.substr(5, 2)+'/'+value.substr(0, 4)+' '+value.substr(12, 10);
        },
        formatNumber: function (value) 
        {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }

    },
    methods: {
        formatNumber: function (value) 
        {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatDate (date) 
        { 
            if (!date) return null
    
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        cerrarModal(){
            this.modal  = false;
            this.item   = '';
            this.list();
            this.accion = false;
        },
        insItem () {

            this.item = '';
            this.nb_accion  = 'Agregar:';
            this.accion     = 'ins';
            this.modal      = true;
            
        },
        updItem (item) {

            this.nb_accion  = 'Editar:';
            this.accion     = 'upd';
            this.modal      = true;
            this.item       = item;
        },
        delForm (item) {

            this.verDialogo = true;
            this.item = item;
            
        },
        delCancel () {

            this.verDialogo = false;
            
        }
        

   
    }

}
