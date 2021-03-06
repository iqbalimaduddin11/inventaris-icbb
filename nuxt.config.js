export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Inventaris ICBB',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css",
        rel: "stylesheet"
      },
      {
        href: "vue-search-select/dist/VueSearchSelect.css",
        rel: "stylesheet"
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.0.js'
      },
      {
        src: 'vue-search-select/dist/VueSearchSelect.umd.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-search-select/dist/VueSearchSelect.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugin/bootstrap-plugin.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment'
  ],
  fontawesome: {
    component: 'fa',
    // set: '@fontawesome/free-solid-svg-icons',
    icons: {
      solid: true,
      brands: true
    }
  },
  moment: {
    locales: ['id'],
    timezone: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    [
      "nuxt-vuex-localstorage",
      {
        mode: "debug",
        localStorage: ['user']
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://inventaris-yayasan.herokuapp.com',
    proxy: true,
    proxyHeaders: false,
    credentials: false
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://inventaris-yayasan.herokuapp.com/user/login',
            method: 'post',
            propertyName: 'data'
          },
          logout: false
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
