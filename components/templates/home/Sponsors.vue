<template>
  <div
    class="transition-colors duration-300 ease-linear bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt"
  >
    <div class="container px-4 py-12 mx-auto text-centshadow-nuxter">
      <section class="px-4">
        <h1 class="mb-2 text-3xl font-medium uppercase sm:mb-0">
          {{ $t('homepage.sponsors.title') }}
        </h1>
        <ClientOnly>
          <img
            src="/icon.png"
            alt="Emrin Angelov"
            class="inline-block float-right lg:ml-4 rounded-full w-full sm:w-1/2 md:1/3 lg:w-1/4"
            loading="lazy"
          />
        </ClientOnly>
        <div
          class="pt-6 pb-12 leading-loose text-left transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
        >
          <i18n path="homepage.sponsors.description">
            <template #break>
              <br />
            </template>
            <template #diploma>
              <span
                ><a href="/diplome.pdf" download="">{{
                  $t('homepage.sponsors.diploma')
                }}</a></span
              >
            </template>
          </i18n>
        </div>

        <div class="text-center">
          <AppButton
            :to="localePath({ name: 'contact' })"
            data-cy="sponsors"
            class="px-6 py-3 text-base"
          >
            <GithubIcon slot="icon" class="inline-block h-5 mr-1 -mt-1" />
            {{ $t('homepage.sponsors.become_a_sponsor') }}
          </AppButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GithubIcon from '~/assets/icons/meteor.svg?inline'
export default {
  components: {
    GithubIcon
  }
}
</script>

<style lang="scss">
.sponsor {
  & img {
    filter: grayscale(100%);
    opacity: 0.75;
    transition: all 0.5s;
  }

  &:hover {
    & img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}

#sponsor-img {
  shape-outside: circle(49.5% at 90px 95px);
}
</style>
