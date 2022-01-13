<template>
  <footer class="z-10 relative pb-16 lg:pb-0 lg:block">
    <!--    <NewsletterForm />-->

    <div
      class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear"
    >
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col sm:flex-row text-center sm:text-left items-center content-center justify-between pt-10 sm:py-10"
        >
          <nav
            v-for="(l, title, index) in links"
            :key="title"
            class="flex-1 w-full sm:w-auto mb-8 sm:mb-0"
            :class="{
              'sm:text-center': index === 1,
              'sm:text-right': index === 2
            }"
          >
            <h3
              class="font-bold uppercase text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-lg pb-4 transition-colors duration-300 ease-linear"
            >
              {{ $t(`footer.links.${title}.title`) }}
            </h3>
            <ul
              class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
            >
              <li v-for="(link, i) in l" :key="i" class="py-2">
                <a
                  v-if="link.href"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-nuxt-lightgreen"
                >
                  {{ link.key }}
                </a>
                <NuxtLink
                  v-else
                  :to="localePath(link.to)"
                  class="hover:text-nuxt-lightgreen"
                >
                  {{ link.key }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="lg:border-t border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"
      >
        <div
          class="container mx-auto px-4 flex flex-row items-center content-center justify-between py-4"
        >
          <div class="flex-1 flex">
            <DarkModeToggle />
          </div>
          <div class="flex-1 text-right">
            <AppLangSelect
              :value="$i18n.locale"
              :options="$i18n.locales"
              label="Select language"
            >
              <template #icon>
                <GlobeIcon />
              </template>
            </AppLangSelect>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GlobeIcon from '~/assets/icons/globe.svg?inline'

export default {
  components: {
    GlobeIcon
  },
  data() {
    return {
      links: {
        discover: [
          {
            key: 'Aclipt',
            href: 'https://aclipt.com/autre/paris/aclipt'
          },
          {
            key: 'YouTube',
            href: 'https://www.youtube.com/channel/UCLluAat6PqWJXAk0KnnjPLg'
          }
        ],
        about: [
          {
            key: 'Contact',
            to: this.localePath('/contact')
          },
          {
            key: 'Twitter',
            href: 'https://twitter.com/cyberlypse'
          }
        ],
        support: [
          {
            key: this.$t('footer.links.discover.sponsor'),
            to: this.localePath('/donate')
          },
          {
            key: 'GitHub',
            href: 'https://github.com/Emrin'
          }
        ]
      }
    }
  }
}
</script>
