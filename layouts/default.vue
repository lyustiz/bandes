<template>
  <v-app>

    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
        <!--menu-->
        <v-list>
            
            <v-list-tile
              router
              :to="item.to"
              :key="i"
              v-for="(item, i) in items"
              exact
            >
                <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>

        </v-list>
        
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.mdAndUp" 
      color="red darken-3" 
      dark 
      fixed 
      app 
    >
        <v-toolbar-title v-text="titulo"></v-toolbar-title>
        
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn> 

        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        
        <v-spacer></v-spacer>

        <v-btn icon >
            <v-icon>apps</v-icon>
        </v-btn>

        <v-form @submit.prevent="logout()">
            <v-btn icon type="submit">
                <v-icon >logout</v-icon>
            </v-btn>
        </v-form>

    </v-toolbar>

    <v-content>
        <v-container>

            <nuxt />

        </v-container>
    </v-content>
    
    
    
    <v-footer :fixed="fixed" app>
        <span>&copy; Bandes  {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'bubble_chart', title: 'Banco', to: '/banco' }
        ],
        miniVariant: false,
        titulo: 'Bandes'
      }
    }
  }
</script>
