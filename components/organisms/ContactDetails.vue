<template>
  <div
    class="
      bg-light-elevatedSurface
      dark:bg-dark-elevatedSurface
      shadow-nuxt
      relative
    "
  >
    <div class="container mx-auto px-4 py-4 lg:py-6">
      <section class="text-center rounded-t-lg lg:mx-0">
        <i18n
          path="contact.title"
          tag="h1"
          class="
            text-4xl
            xl:text-5xl
            text-light-onSurfacePrimary
            dark:text-dark-onSurfacePrimary
            font-medium
            tracking-normal
            mb-6
          "
        >
          <template #contact>
            <span class="text-nuxt-lightgreen">{{ $t('contact.title2') }}</span>
          </template>
        </i18n>
        <div
          class="
            mx-auto
            -mt-3
            lg:-mt-2
            mb-3
            text-light-onSurfaceSecondary
            dark:text-dark-onSurfaceSecondary
          "
        >
          <ul>
            <li>
              Protonmail:
              <a href="mailto:emrinangelov@pm.me">emrinangelov@pm.me</a>
            </li>
            <li>
              Gmail:
              <a href="mailto:emrinangelov@gmail.com">emrinangelov@gmail.com</a>
            </li>
            <li>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/emrin-angelov/"
                target="_blank"
                rel="noopener noreferrer"
                >linkedin.com/in/emrin-angelov</a
              >
            </li>
            <i18n path="contact.phone" tag="li">
              <template #cv>
                <NuxtLink :to="localePath('cv')">{{
                  $t('contact.cv')
                }}</NuxtLink>
              </template>
              <template #signal>
                <a
                  href="https://signal.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t('contact.signal') }}</a
                >
              </template>
            </i18n>
            <!--            <li>Twitter: <a href='https://twitter.com/cyberlypse'>Cyberlypse</a></li>-->
          </ul>
        </div>
        <SponsoringIllustration
          id="sponsor-img"
          class="hidden inline-block lg:ml-4"
          style="width: 300px"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SponsoringIllustration from '~/assets/illustrations/about.svg?inline'
export default {
  components: {
    SponsoringIllustration
  }
}
</script>
