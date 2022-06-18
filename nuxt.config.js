export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'qr-code-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'QR Code Generator' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-qr.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  chakra: {
    extendTheme: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
          50: "#f7fafc",
          100: "#EDF2F7",
          200: "#E2E8F0",
          400: "#A0AEC0",
          500: "#718096",
          900: "#1a202c",
        },
        vue: {
          50: "#E1FBF0",
          100: "#C0ECDA",
          400: "#55C392",
          700: "#1D5E42"
        }
      }
    }
  }
}
