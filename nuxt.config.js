module.exports = {
 
  env: {
    baseUrl:    process.env.BASE_URL    || 'http://localhost:3000',
    apiUrl:     process.env.API_URL     || 'http://127.0.0.1:5400',
    themeColor: process.env.THEME_COLOR || 'red',
  },
 
  head: {
    title: 'Bandes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Banca en linea de Bandes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  plugins: ['~/plugins/vuetify.js', '~/plugins/components.js'],
  
  css: ['~/assets/style/app.styl'],

  loading: { color: '#3B8070' },

  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
     /* if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
