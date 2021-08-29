import webpack from 'webpack'

export default {
  target: 'static',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: ['fa', 'ar', 'he'].includes(process.env.NUXT_LOCALE) ? 'rtl' : 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Emrin Angelov' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cyberlypse' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://emrinangelov.com/card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://emrinangelov.com/card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Emrin Angelov'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://emrinangelov.com/card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
      // }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
    }
  },
  buildModules: [
    // https://github.com/teamnovu/nuxt-breaky
    '@teamnovu/nuxt-breaky',
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/Atinux/nuxt-tailwindcss/
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // https://github.com/moritzsternemann/vue-plausible
    'vue-plausible'
  ],
  modules: [
    // '~/modules/releases',
    '@nuxt/http',
    '@nuxt/content',
    'nuxt-i18n',
    'vue-scrollto/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'Emrin Angelov',
      description: 'Emrin Angelov\'s official website',
      theme_color: '#379bea'
    }
  },
  components: [
    '~/components/templates',
    '~/components/global',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms'
  ],
  colorMode: {
    preference: 'light' // disable system
  },
  plausible: {
    domain: 'emrinangelov.com'
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: [
    '~/assets/css/main.scss',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  plugins: [
    '~/plugins/i18n',
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    // '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js',
    // '~/plugins/newsletter.client.js',
    '~/plugins/vue-scrollactive',
    // '~/plugins/contributors',
    '~/plugins/youtube.client.js'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || false,
    URL: process.env.URL || false,
    DOC_SEARCH_API_KEY:
      process.env.DOC_SEARCH_API_KEY || 'wasdwasd',
    NUXT_API: process.env.NUXT_API || 'https://api.emrinangelov.com'
  },
  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'en',
    nuxtVersion: '4.0.4',
    nuxtStars: '42K+'
  },
  loading: { color: '#379bea' },
  generate: {
    fallback: false,
    routes: ['/', '404']
  },
  tailwindcss: {
    exposeConfig: true
  },
  i18n: {
    // differentDomains: true,
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
        // domain: process.env.NODE_ENV === 'production' ? 'https://emrinangelov.com' : 'localhost:3000'
        domain: 'https://emrinangelov.com'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français',
        // domain: process.env.NODE_ENV === 'production' ? 'https://fr.emrinangelov.com' : 'fr.localhost:3000'
        domain: 'https://fr.emrinangelov.com'
      }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'en',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
  },
  build: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  },
  hooks: {
    'content:file:beforeInsert': item => {
      const stats = require('reading-time')(item.text)

      item.readingTime = stats
    }
  },

  // // For deploying at Github Pages without a CNAME
  // router: {
  //   base: process.env.NODE_ENV === 'production' ? '/emrinangelov.com/' : '/'
  // },



  // // DEV MODE with HMR on Docker:
// // 1. Delete node_modules (and maybe yarn.lock) because Linux
// // docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --env HOST=0.0.0.0
// // --env PORT=3000 node:alpine sh -c "yarn install && yarn dev"
// // And have this set to fix HMR.
// watchers: {
//   webpack: {
//     aggregateTimeout: 300,
//     poll: 1000
//   }
// },

// // PROD MODE on K8S:
// // 1. Build a prod image with Dockerfile (and dockerignore)
// // 2. Create a YAML file for its deployment and service
// // 3. kubectl apply -f frontend.yaml
}
