<template>
  <div :class="cookieSpacerStyles">
    <Banner />
    <TheHeader />
    <main
      class="
        lg:block
        relative
        bg-light-elevatedSurface
        dark:bg-dark-elevatedSurface
        transition-colors
        duration-300
        ease-linear
      "
    >
      <Nuxt />
    </main>
    <TheFooter />
    <TheMobileBottomNav />
    <TheCookieBox
      class="
        w-full
        fixed
        bottom-0
        left-0
        mt-8
        z-40
        translucent
        bg-light-elevatedSurfaceHalf
        dark:bg-dark-elevatedSurfaceHalf
      "
      @acknowledge-banner="showCookieBanner = false"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    showCookieBanner: false
  }),
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    // const { path } = this.$route
    // const pathWithSlash = path.endsWith('/') ? path : `${path}/`
    // const canonical = `https://emrinangelov.com${pathWithSlash}`
    // if (this.$i18n.locale !== 'en') {
    //   canonical = `https://${this.$i18n.locale}.emrinangelov.com${pathWithSlash}`
    // }
    return {
      htmlAttrs: i18nSeo.htmlAttrs,

      meta: [
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('homepage.meta.description')
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('homepage.meta.description')
        }
      ],
      ...i18nSeo,

      link: [
        // { rel: 'canonical', href: canonical },
        // { rel: 'alternate', hreflang: 'en', href: `https://emrinangelov.com${pathWithSlash}` },
        // { rel: 'alternate', hreflang: 'fr', href: `https://emrinangelov.com${pathWithSlash}` },
        // { rel: 'alternate', hreflang: 'fr', href: `https://fr.emrinangelov.com${pathWithSlash}` },

        ...i18nSeo.link
      ]
    }
  },
  computed: {
    cookieSpacerStyles() {
      return this.showCookieBanner ? 'pb-20 md:pb-4 lg:pb-20' : ''
    }
  },
  mounted() {
    const bannerCookie = 'cookieconsent_status'
    const docCookies = `; ${document.cookie}`

    this.showCookieBanner = !docCookies.includes(bannerCookie)

    this.welcomeMessage()
  },
  methods: {
    welcomeMessage() {
      console.log('%c Greetings.', 'color: #00fffb; font-size:42px;')
      console.log(
        '%c⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
          '⠀⠀⠀⠀⣠⠞⠉⢉⠩⢍⡙⠛⠋⣉⠉⠍⢉⣉⣉⣉⠩⢉⠉⠛⠲⣄⠀⠀⠀⠀\n' +
          '⠀⠀⠀⡴⠁⠀⠂⡠⠑⠀⠀⠀⠂⠀⠀⠀⠀⠠⠀⠀⠐⠁⢊⠀⠄⠈⢦⠀⠀⠀\n' +
          '⠀⣠⡾⠁⠀⠀⠄⣴⡪⠽⣿⡓⢦⠀⠀⡀⠀⣠⢖⣻⣿⣒⣦⠀⡀⢀⣈⢦⡀⠀\n' +
          '⣰⠑⢰⠋⢩⡙⠒⠦⠖⠋⠀⠈⠁⠀⠀⠀⠀⠈⠉⠀⠘⠦⠤⠴⠒⡟⠲⡌⠛⣆\n' +
          '⢹⡰⡸⠈⢻⣈⠓⡦⢤⣀⡀⢾⠩⠤⠀⠀⠤⠌⡳⠐⣒⣠⣤⠖⢋⡟⠒⡏⡄⡟\n' +
          '⠀⠙⢆⠀⠀⠻⡙⡿⢦⣄⣹⠙⠒⢲⠦⠴⡖⠒⠚⣏⣁⣤⣾⢚⡝⠁⠀⣨⠞⠀\n' +
          '⠀⠀⠈⢧⠀⠀⠙⢧⡀⠈⡟⠛⠷⡾⣶⣾⣷⠾⠛⢻⠉⢀⡽⠋⠀⠀⣰⠃⠀⠀\n' +
          '⠀⠀⠀⠀⠑⢤⡠⢂⠌⡛⠦⠤⣄⣇⣀⣀⣸⣀⡤⠼⠚⡉⢄⠠⣠⠞⠁⠀⠀⠀\n' +
          '⠀⠀⠀⠀⠀⠀⠉⠓⠮⣔⡁⠦⠀⣤⠤⠤⣤⠄⠰⠌⣂⡬⠖⠋⠀⠀⠀⠀⠀⠀\n' +
          '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠤⢤⣀⣀⡤⠴⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
        'color: #00fffb;'
      )
      window.addEventListener('keyup', this.detectDevTool)
    },
    welcomeGif(url) {
      // Create a new `Image` instance
      const image = new Image()

      image.onload = function () {
        // Inside here we already have the dimensions of the loaded image
        const style = [
          // Hacky way of forcing image's viewport using `font-size` and `line-height`
          'font-size: 1px;',
          'line-height: ' + (this.height % 2) + 'px;',

          // Hacky way of forcing a middle/center anchor point for the image
          'padding: ' + this.height * 0.5 + 'px ' + this.width * 0.5 + 'px;',

          // Set image dimensions
          'background-size: ' + this.width + 'px ' + this.height + 'px;',

          // Set image URL
          'background: no-repeat url(' + url + ');'
        ].join(' ')

        // notice the space after %c
        console.log('%c ', style)
      }

      // Actually loads the image
      image.src = url
    },
    detectDevTool(key) {
      if (key.code === 'F12') {
        window.removeEventListener('keyup', this.detectDevTool)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/hello-there.gif')
        }, 3000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/gandalf.gif')
        }, 540000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/ride.gif')
        }, 1080000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/drink.gif')
          console.log('Yo - Remember to drink.')
        }, 1620000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/hackerman.jpg')
        }, 2160000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/haha.gif')
        }, 2700000)
        setTimeout(() => {
          this.welcomeGif('https://emrinangelov.com/travolta.gif')
        }, 3240000)
      }
    }
  }
}
</script>
