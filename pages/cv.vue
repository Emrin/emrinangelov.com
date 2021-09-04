<template>
  <div>
    <!--Download-->
    <div
      class="
        bg-light-surface
        dark:bg-dark-surfacebg-light-elevatedSurface
        dark:bg-dark-elevatedSurface
        shadow-nuxt
        relative
      "
    >
      <div class="container mx-auto px-4">
        <div class="flex justify-between py-8 sm:py-12">
          <div class="w-full text-center py-4 sm:p-0">
            <AppButton
              href="/CV.pdf"
              download=""
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base my-1"
              data-cy="download-cv"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download') }}
            </AppButton>
            <AppButton
              href="/CV_FR.pdf"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base my-1"
              data-cy="download-cv2"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download_fr') }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <!--The CV-->
    <div class="bg-light-surface dark:bg-dark-surface">
      <div class="container mx-auto px-4 pt-12">
        <object
          type="application/pdf"
          :data="`/CV${
            tab === 'en' ? '' : '_FR'
          }.pdf#toolbar=0&navpanes=0&scrollbar=0`"
          width="100%"
          height="700px"
        ></object>
      </div>

      <!--Button-->
      <div class="mx-auto text-center pb-12 pt-3">
        <AppButton2
          variant="secondary"
          class="sm:mr-4 py-3 px-6 text-base"
          data-cy="switch-cv-locale"
          @click.native="tabSwitch"
        >
          <NextIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
          {{ tab === 'en' ? $t('cv.fr') : $t('cv.en') }}
        </AppButton2>
      </div>
    </div>
    <!--Download-->
    <div
      class="
        bg-light-surface
        dark:bg-dark-surfacebg-light-elevatedSurface
        dark:bg-dark-elevatedSurface
        shadow-nuxt
        relative
      "
    >
      <div class="container mx-auto px-4">
        <div class="flex justify-between py-8 sm:py-12">
          <div class="w-full text-center py-4 sm:p-0">
            <AppButton
              href="/CV.pdf"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base my-1"
              data-cy="download-cv2"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download') }}
            </AppButton>
            <AppButton
              href="/CV_FR.pdf"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base my-1"
              data-cy="download-cv2"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download_fr') }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadIcon from '~/assets/icons/inbox-in.svg?inline'
import NextIcon from '~/assets/icons/angle-double-right.svg?inline'

export default {
  components: {
    DownloadIcon,
    NextIcon
  },
  asyncData(ctx) {
    return {
      tab: ctx.i18n.localeProperties.code
    }
  },
  head() {
    const title = this.$i18n.t('cv.meta.title')
    const description = this.$i18n.t('cv.meta.description')

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
  },
  methods: {
    tabSwitch() {
      console.log('wasd')
      this.tab === 'en' ? (this.tab = 'fr') : (this.tab = 'en')
    }
  }
}
</script>
