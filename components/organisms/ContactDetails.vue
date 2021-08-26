<template>
  <div class="container mx-auto px-4">
    <div class="w-full text-center py-4 sm:p-0">
      <section>
        <i18n path="contact.title" tag="h1"
          class="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal mb-6">
          <template #contact>
            <span class="text-nuxt-lightgreen">{{ $t('contact.title2') }}</span>
          </template>
        </i18n>
        <div class='mx-auto text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary'>
          <ul>
            <li>Protonmail: <a href='mailto:emrinangelov@pm.me'>emrinangelov@pm.me</a></li>
            <li>Gmail: <a href='mailto:emrinangelov@gmail.com'>emrinangelov@gmail.com</a></li>
<!--            <li>Protonmail: <a href='mailto:cyberlypse@protonmail.com'>cyberlypse@protonmail.com</a></li>-->
            <li>LinkedIn: <a href='https://www.linkedin.com/in/emrin-angelov/'>linkedin.com/in/emrin-angelov</a></li>
<!--            <li>Twitter: <a href='https://twitter.com/cyberlypse'>Cyberlypse</a></li>-->
          </ul>
        </div>
        <p class="py-3 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary">
<!--          Follow me and stuff!-->
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>
