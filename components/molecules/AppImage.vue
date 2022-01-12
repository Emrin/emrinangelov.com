<template>
  <div
    v-observe-visibility="{
      callback: lazyLoadImage,
      throttle: 250,
      once: true
    }"
    :style="[intristicRatioStyle]"
    class="relative overflow-hidden light:bg-light-surface dark:bg-dark-surface"
  >
    <div />
    <img
      v-if="show"
      ref="img"
      :src="`/${src}`"
      :alt="alt"
      class="object-cover w-full h-full transition-opacity duration-500 opacity-0"
      :class="[ratio && 'absolute top-0 left-0']"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    ratio: {
      type: String,
      default: null
    },
    sizes: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      show: false,
      loaded: false
    }
  },
  computed: {
    ...mapState({
      host: state => state.host,
      isDev: state => state.isDev,
      isTest: state => state.isTest,
      isProd: state => state.isProd
    }),
    intristicRatio() {
      if (!this.ratio) {
        return 0
      } else {
        const sizes = this.ratio.split(':')
        const ratio = sizes[1] / sizes[0]
        return ratio
      }
    },
    intristicRatioStyle() {
      return {
        'padding-bottom': `${this.intristicRatio * 100}%`
      }
    }
  },
  methods: {
    lazyLoadImage(isVisible, entry) {
      if (isVisible) {
        this.show = true
        this.$nextTick(() => {
          const lazyImage = this.$refs.img

          lazyImage.addEventListener('load', () => {
            lazyImage.classList.add('lazy-loaded')
            this.loaded = true
          })
          lazyImage.addEventListener('error', () => {
            lazyImage.classList.add('lazy-load-error')
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lazy-loaded {
  opacity: 1;
}
</style>
