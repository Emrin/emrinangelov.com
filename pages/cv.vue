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
              class="sm:mr-4 py-3 px-6 text-base"
              data-cy="download-cv"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download') }}
            </AppButton>
            <AppButton
              href="/CV_FR.pdf"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base"
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
      <div class="container mx-auto px-4 py-12">
        <object
          type="application/pdf"
          :data="`/CV${
            $i18n.locale === 'en' ? '' : '_FR'
          }.pdf#toolbar=0&navpanes=0&scrollbar=0`"
          width="100%"
          height="700px"
        ></object>
        <!--        <embed src="/CV.pdf#toolbar=0&navpanes=0&scrollbar=0" width='100%' height='700px'></embed>-->
        <!--        <iframe src="/CV.pdf#toolbar=0&navpanes=0&scrollbar=0" width='100%' height="666px"></iframe>-->
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
              class="sm:mr-4 py-3 px-6 text-base"
              data-cy="download-cv2"
            >
              <DownloadIcon slot="icon" class="inline-block h-6 -mt-1 mr-1" />
              {{ $t('cv.download') }}
            </AppButton>
            <AppButton
              href="/CV_FR.pdf"
              variant="primary"
              class="sm:mr-4 py-3 px-6 text-base"
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

export default {
  components: {
    DownloadIcon
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
  }
}
</script>
