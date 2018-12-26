const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '江湖数峰青',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://jinyong-memory.oss-cn-shanghai.aliyuncs.com/basic/%E5%B1%B1%E6%B0%B4.png'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ceaf6e' },

  /*
  ** Global CSS
  */
  css: ['normalize.css/normalize.css', 'swiper/dist/css/swiper.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
