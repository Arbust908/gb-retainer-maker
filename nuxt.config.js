export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Retainer Maker || GatoBuho',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      /** HTTP-EQUIV */
      {
        hid: 'contentLanguage',
        'http-equiv': 'content-language',
        content: 'en'
      },
      {
        hid: 'XUACompatible',
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      { hid: 'cleartype', 'http-equiv': 'cleartype', content: 'on' },
      /** UTILIDADES */
      { hid: 'mobileOptimized', name: 'MobileOptimized', content: '320' },
      { hid: 'themeColor', name: 'theme-color', content: '#414042' },
      { hid: 'handheldFriendly', name: 'HandheldFriendly', content: 'True' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `GatoBuho`
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: `Retainer Maker || GatoBuho`
      },
      // {
      //     hid: `og:image`,
      //     property: 'og:image',
      //     content: `${this.gringottsUrl}/invitations/${this.invitation.data_id}.png`
      // },
      {
        hid: `og:site_name`,
        property: 'og:site_name',
        content: `GatoBuho`
      },
      // {
      //     hid: `og:url`,
      //     property: 'og:url',
      //     content: this.baseUrl + this.$route.fullPath
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `GatoBuho`
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `Retainer Maker || GatoBuho`
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src'
        // content: `${this.gringottsUrl}/invitations/${this.invitation.data_id}.png`
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: `summary_large_image`
      },
      // {
      //     hid: 'twitter:creator',
      //     property: 'twitter:creator',
      //     content: `@quieroinvitar`
      // },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: `retainer.gatobuho.com`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-48.png',
        sizes: '48x48'
      },
      { rel: 'apple-touch-icon', href: '/favicon-57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon-120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon-152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon-167.png', sizes: '167x167' },
      { rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180' },
      { rel: 'icon', href: '/favicon-96.png', sizes: '96x96' },
      { rel: 'icon', href: '/favicon-192.png', sizes: '192x192' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
      }
    ]
  },
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
    'nuxt-vue-multiselect',
    [
      '@yabhq/nuxt-hotjar',
      {
        hjid: 1876513, // required
        hjsv: 6, // optional
        defer: true, // optional
        async: false, // optional
        dev: true // optional
      }
    ]
  ],
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
    extend(config, ctx) {}
  }
}
