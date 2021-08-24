<template>
  <div class="shadow-nuxt">
    <div class="container px-4 pt-16 pb-12 mx-auto">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="p-4 text-center lg:w-6/12 lg:text-left sm:p-0">
          <i18n
            path="sponsor.title"
            tag="h1"
            class="mb-6 text-3xl font-medium leading-normal xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary lg:pt-4"/>
          <i18n
            path="sponsor.description"
            tag="h3"
            class="mb-6 font-medium leading-relaxed xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
          >
            <template #break>
              <br />
            </template>
          </i18n>
        </div>
        <SponsorIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
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
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>
