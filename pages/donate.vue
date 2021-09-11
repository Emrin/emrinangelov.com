<template>
  <div class="shadow-nuxt">
    <div class="container px-4 pt-16 pb-12 mx-auto">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="p-4 text-center lg:w-6/12 lg:text-left sm:p-0">
          <i18n
            path="sponsor.title"
            tag="h1"
            class="
              mb-6
              text-3xl
              font-medium
              leading-normal
              xl:text-4xl
              text-light-onSurfacePrimary
              dark:text-dark-onSurfacePrimary
              lg:pt-4
            "
          />
          <p
            class="
              mb-6
              font-medium
              break-all
              leading-relaxed
              xl:text-lg
              text-light-onSurfaceSecondary
              dark:text-dark-onSurfaceSecondary
            "
          >
            <span class="text-nuxt-lightgreen">BTC:</span>
            3LYu69HdChTW4xEScBdVUbf2HrknLFA1FX<br />
            <span class="text-nuxt-lightgreen">Ethereum:</span>
            0x84cb10f7a997eefc7a16eb6c2f84f81b5243b33c<br />
            <span class="text-nuxt-lightgreen">Monero:</span>
            834wWuKWuBjjHu2roitmEeGLDWUqEKk9HDezaxs9ykXsSxjgbZpUR5M1MF6D7y2b3hC57BHeBouS9i6JKBwTfPy467EFWYS<br />
            <span class="text-nuxt-lightgreen">Nano:</span>
            nano_3fc87qsxgratp9f8151i7hx1o6agomadcm7dgktcnqcx9p3yxaskj5h7n78o<br />
            <span class="text-nuxt-lightgreen">Doge:</span>
            DEQavxTeQpqgpt59GxfZMEfHbmQKmktFnB<br />
          </p>
        </div>
        <SponsorIllustration
          class="
            w-2/3
            mx-auto
            lg:mx-0 lg:w-5/12 lg:-mt-8
            text-light-elevatedSurface
            dark:text-dark-elevatedSurface
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import SponsorIllustration from '~/assets/illustrations/sponsor.svg?inline'

export default {
  components: {
    SponsorIllustration
  },

  head() {
    const title = this.$t('sponsor.meta.title')
    const description = this.$t('sponsor.meta.description')

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>
