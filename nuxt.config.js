import head from './configs/head'
import pwa from './configs/pwa'

export default {
  server: {
    port: 3333, // default: 3000
    timing: false
  },
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/vueHtml2Canvas.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-vue-multiselect'
    // [
    //   '@yabhq/nuxt-hotjar',
    //   {
    //     hjid: 1877978, // required
    //     hjsv: 6, // optional
    //     defer: true, // optional
    //     async: false, // optional
    //     dev: false // optional
    //   }
    // ]
  ],
  pwa,
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    parallel: true,
    cache: true,
    extend(config, ctx) {}
  },
  pageTransition: {
    name: 'transition',
    mode: 'out-in'
  },
  // https://nuxtjs.org/api/configuration-modern/
  modern: true
}
