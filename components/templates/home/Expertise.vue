<template>
  <div
    class="
      bg-light-elevatedSurface
      dark:bg-dark-elevatedSurface
      shadow-nuxt
      relative
    "
  >
    <div class="container mx-auto px-4 py-24">
      <section>
        <i18n
          path="homepage.companies.title"
          tag="h2"
          class="text-3xl font-medium text-center pb-8 mb-12"
        >
          {{ $t('homepage.companies.title') }}
          <template #expertise>
            <span class="text-nuxt-lightgreen">Expertise</span>
          </template>
        </i18n>

        <div v-for="(group, i) in expertise" :key="i" class="pb-8 text-center">
          <h2
            class="
              pb-8
              font-medium
              transition-colors
              duration-300
              ease-linear
              text text-light-onSurfacePrimary
              dark:text-dark-onSurfacePrimary
            "
          >
            <span
              class="
                pb-2
                leading-10
                sm:leading-3
                border-b-2 border-nuxt-lightgreen
              "
            >
              {{ $t(`homepage.companies.${group.name}`) }}
            </span>
          </h2>
          <a
            v-for="(e, j) in group.set"
            :key="j"
            class="inline-block m-4 company relative"
            :href="`${e.url}?ref=emrinangelov`"
            target="_blank"
            rel="noopener nofollow"
            :title="e.name"
          >
            <ClientOnly>
              <img
                :src="'/img/companies/original/' + e.img"
                :alt="e.name"
                :class="[
                  e.class,
                  $colorMode.value === 'dark'
                    ? 'absolute top-0 left-0 opacity-0'
                    : ''
                ]"
                class="original inline-block"
                loading="lazy"
              />
              <img
                v-if="$colorMode.value === 'dark'"
                :src="'/img/companies/preview/' + e.img"
                :alt="e.name"
                :class="e.class"
                class="preview inline-block"
                loading="lazy"
              />
            </ClientOnly>
          </a>
        </div>

        <div class="text-center">
          <i18n path="homepage.companies.contact" tag="p">
            <template #contact>
              <NuxtLink
                :to="localePath('contact')"
                class="border-b-2 border-nuxt-lightgreen"
              >
                {{ $t('homepage.companies.c') }}
              </NuxtLink>
            </template>
          </i18n>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expertise: [
        {
          name: 'dev',
          set: [
            {
              name: 'Vue',
              img: 'vue.png',
              url: 'https://vuejs.org/',
              class: 'h-12'
            },
            {
              name: 'Firebase',
              img: 'firebase.png',
              url: 'https://firebase.google.com/',
              class: 'h-12'
            },
            {
              name: 'Stripe',
              img: 'stripe.png',
              url: 'https://stripe.com/',
              class: 'h-16'
            },
            {
              name: 'ElasticSearch',
              img: 'es.png',
              url: 'https://www.elastic.co/',
              class: 'h-12'
            },
            {
              name: 'JavaScript',
              img: 'js.png',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              class: 'h-12'
            }
          ]
        },
        {
          name: 'ops',
          set: [
            {
              name: 'Google Cloud Platform',
              img: 'gcp.png',
              url: 'https://cloud.google.com/',
              class: 'h-16'
            },
            {
              name: 'GitHub',
              img: 'GitHub_Logo.png',
              url: 'https://github.com/',
              class: 'h-12'
            },
            {
              name: 'Kubernetes',
              img: 'kubernetes.png',
              url: 'https://kubernetes.io/',
              class: 'h-12'
            },
            {
              name: 'Docker',
              img: 'docker.png',
              url: 'https://www.docker.com/',
              class: 'h-10'
            },
            {
              name: 'GitLab',
              img: 'gitlab.svg',
              url: 'https://about.gitlab.com/',
              class: 'h-16'
            }
          ]
        },
        {
          // name: 'LEADERSHIP: Business Strategy & Tactics; Analysis, Reports & Training',
          name: 'lead',
          set: []
        }

        // Development: Cloud-Native, Full Stack Web Development and Mobile Apps
        // Google Cloud Platform, JavaScript, ElasticSearch, Stripe, Firebase

        // Operations: Modern and Fast Continuous Integration and Delivery Processes
        // K8s, Docker, Github, Linux,

        // Leadership: Analysis, Reports, and Training (group and individual)
        // Business: Business Strategy & Tactics,
        // Dedicated Leadership Consulting and Training Services Coming Soon
        // Contact me now to be part of our future team!

        // 1. Software Architecture & Development
        // 2. Cloud Computing
        // 3. Cybersecurity & Privacy
        // 4. Project Management
        // 5. Continuous Integration

        // 1. Google Cloud Platform & Firebase
        // 2. Docker & Kubernetes
        // 3. Github & GitLab
        // 4. ElasticSearch
        // 5. Stripe Payment
        // 1. C, Go, JavaScript, Python, PHP
        // 2. Linux, Mac, Windows
        // 3. iOS, Android
        // 4. WordPress
        // 5. Adobe Creative Suite

        // Skills & Knowledge:
        // Tools & Technologies:

        // Software Architecture
        // Full-Stack Development
        // Android Development
        // iOS Development
        // Object-Oriented Programming (OOP)
        // Software Development
        // Web Design
        // Web Applications
        // Digital Project Management
        // Cloud Applications
        // Cloud Security
        // Privacy Design
        // PWA
        // VueJS & NuxtJS
        // Unity
        // C#, C++, Java, Flutter
        // Web Languages: HTML, CSS
        // NodeJS,
        // NoSQL, SQL,
        // WordPress,
        // Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  .preview {
    filter: grayscale(100%);
    opacity: 0.5;
    transition: all 250ms ease;
  }

  .original {
    filter: grayscale(100%);
    opacity: 0.5;
    transition: all 250ms ease;
  }

  &:hover {
    .preview {
      opacity: 0;
    }

    .original {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}
</style>
