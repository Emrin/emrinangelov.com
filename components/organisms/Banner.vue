<template>
  <NuxtLink
    to='contact'
    :class="isOpen ? 'block' : 'hidden'"
    :style="{ backgroundColor: '#0c2442' }"
  >
<!--  <a-->
<!--    href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=banner&utm_campaign=summer21"-->
<!--    target="_blank"-->
<!--    rel="noopener"-->
<!--    :class="isOpen ? 'block' : 'hidden'"-->
<!--    :style="{ backgroundColor: '#0c2442' }"-->
<!--  >-->
<!--    style='background: linear-gradient(to right, #0c2442, #4f7492);'>-->
    <div class="font-roboto lg:container lg:mx-auto">
      <div
        class="
          h-12
          relative
          flex
          items-center
          justify-center
          text-xs
          mx-4
          md:mx-10 md:text-sm
          lg:text-base lg:mx-0
          text-white
        "
      >
        <div class="w-8 md:absolute md:left-0">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="12"
              cy="12"
              r="10"
              class="text-green-200 fill-current dark:text-green-700"
            />
            <path
              d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
              class="text-green-600 fill-current dark:text-white"
            />
          </svg>
        </div>
<!--        <div class="md:absolute md:left-0">-->
<!--          <img src="/img/banners/cup.png" class="w-8" />-->
<!--        </div>-->
        <div class="flex items-center justify-center space-x-2 md:space-x-4">
          <div class="hidden md:block">
            <img src="/img/banners/cup.png" class="w-8" />
          </div>
<!--          <div class="hidden md:block w-8">-->
<!--            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--              <circle-->
<!--                cx="12"-->
<!--                cy="12"-->
<!--                r="10"-->
<!--                class="text-green-200 fill-current dark:text-green-700"-->
<!--              />-->
<!--              <path-->
<!--                d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"-->
<!--                class="text-green-600 fill-current dark:text-white"-->
<!--              />-->
<!--            </svg>-->
<!--          </div>-->
          <p
            class="
              leading-tight
              font-bold
              max-w-72
              text-xs
              md:text-base md:max-w-full
            "
          >
            Now
            <span :style="{ color: '#00dc82' }"> available </span>
            for jobs and hire!
          </p>
          <div class="flex items-center">
            <button
              :style="{ 'white-space': 'nowrap' }"
              class="
                font-bold
                uppercase
                bg-orange-500
                hover:bg-orange-600
                text-white
                no-underline
                inline-block
                px-3
                py-1
                text-sm
                uppercase
                rounded
              "
            >
              Contact
            </button>
          </div>
        </div>
        <div
          class="hidden w-3 absolute right-0 md:block"
          @click.prevent.stop="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              d="M13.69.321a1.059 1.059 0 00-1.498 0L7 5.503 1.808.311a1.056 1.056 0 00-1.497 0 1.056 1.056 0 000 1.497L5.503 7 .311 12.192a1.056 1.056 0 000 1.497 1.056 1.056 0 001.497 0L7 8.497l5.192 5.192a1.056 1.056 0 001.497 0 1.056 1.056 0 000-1.497L8.497 7l5.192-5.192a1.064 1.064 0 000-1.487z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.isOpen = !localStorage.getItem('mn-banner-closed')
  },
  methods: {
    close() {
      this.isOpen = false
      localStorage.setItem('mn-banner-closed', 1)
    }
  }
}
</script>
