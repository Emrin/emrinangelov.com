<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt relative">
    <ContactDetails />
<!--    <ContactForm />-->
  </div>
</template>

<script>
export default {
  // nuxtI18n: {
  //   paths: {
  //     en: '/contact',
  //     fr: '/contacter',
  //   }
  // },
  head() {
    const title = this.$i18n.t('homepage.meta.title')
    const description = this.$i18n.t('homepage.meta.description')

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
