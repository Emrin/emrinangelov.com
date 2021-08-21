<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt relative">
    <div class="container mx-auto px-4 py-24">
      <section>
        <i18n
          path="homepage.companies.title"
          tag="h2"
          class="text-3xl font-medium text-center pb-8"
        >
          {{ $t('homepage.companies.title') }}
          <template #expertise>
            <span class="text-nuxt-lightgreen">Expertise</span>
          </template>
        </i18n>
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div
            v-for="(company, i) in langCompanies.slice(0, 5)"
            :key="i"
            class="p-4 lg:p-8 text-center"
          >
            <a
              :href="company.url"
              target="_blank"
              rel="noopener nofollow"
              class="company relative block"
            >
              <ClientOnly>
                <img
                  :src="'/img/companies/original/' + company.img"
                  :alt="company.name"
                  :class="[
                    company.class,
                    $colorMode.value === 'dark'
                      ? 'absolute top-0 left-0 opacity-0'
                      : ''
                  ]"
                  class="original"
                  loading="lazy"
                />
                <img
                  v-if="$colorMode.value === 'dark'"
                  :src="'/img/companies/preview/' + company.img"
                  :alt="company.name"
                  :class="company.class"
                  class="preview"
                  loading="lazy"
                />
              </ClientOnly>
            </a>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div
            v-for="(company, i) in langCompanies.slice(5, 10)"
            :key="i"
            class="p-4 lg:p-8 text-center"
          >
            <a
              :href="company.url"
              target="_blank"
              rel="noopener nofollow"
              class="company relative block"
            >
              <ClientOnly>
                <img
                  :src="'/img/companies/original/' + company.img"
                  :alt="company.name"
                  :class="[
                    company.class,
                    $colorMode.value === 'dark'
                      ? 'absolute top-0 left-0 opacity-0'
                      : ''
                  ]"
                  class="original"
                  loading="lazy"
                />
                <img
                  v-if="$colorMode.value === 'dark'"
                  :src="'/img/companies/preview/' + company.img"
                  :alt="company.name"
                  :class="company.class"
                  class="preview"
                  loading="lazy"
                />
              </ClientOnly>
            </a>
          </div>
        </div>
        <div
          v-if="langCompanies.length > 10"
          class="hidden lg:flex flex-col lg:flex-row items-center justify-between"
        >
          <div
            v-for="(company, i) in langCompanies.slice(10, 15)"
            :key="i"
            class="p-8 text-center"
          >
            <a
              :href="company.url"
              target="_blank"
              rel="noopener nofollow"
              class="company relative block"
            >
              <ClientOnly>
                <img
                  :src="'/img/companies/original/' + company.img"
                  :alt="company.name"
                  :class="[
                    company.class,
                    $colorMode.value === 'dark'
                      ? 'absolute top-0 left-0 opacity-0'
                      : ''
                  ]"
                  class="original"
                  loading="lazy"
                />
                <img
                  v-if="$colorMode.value === 'dark'"
                  :src="'/img/companies/preview/' + company.img"
                  :alt="company.name"
                  :class="company.class"
                  class="preview"
                  loading="lazy"
                />
              </ClientOnly>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: {
        en: [

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



          {
            name: 'Todoist',
            img: 'todoist.svg',
            url: 'https://todoist.com/templates/',
            class: 'h-10'
          },
          {
            name: 'GitLab',
            img: 'gitlab.svg',
            url: 'https://design.gitlab.com',
            class: 'h-16'
          },
          {
            name: 'Nespresso',
            img: 'nespresso.svg',
            url: 'https://www.nespresso.com/careers/',
            class: 'h-10'
          },
          // {
          //   name: 'System76',
          //   img: 'system76.svg',
          //   url: 'https://system76.com',
          //   class: 'h-10'
          // },
          {
            name: 'GitHub',
            img: 'GitHub_Logo.png',
            url: 'https://stars.github.com/',
            class: 'h-12'
          },
          {
            name: 'Aircall',
            img: 'aircall.svg',
            url: 'https://aircall.io',
            class: 'h-10'
          },
          {
            name: 'Instrument',
            img: 'instrument.svg',
            url: 'https://www.instrument.com',
            class: 'h-8'
          },
          {
            name: 'Ubisoft',
            img: 'ubisoft.svg',
            url: 'https://assassinscreed.ubisoft.com/story-creator-mode',
            class: 'h-12'
          },
          {
            name: 'MyScript',
            img: 'my-script.svg',
            url: 'https://www.myscript.com',
            class: 'h-10'
          },
          {
            name: 'Roland Garros',
            img: 'roland-garros.svg',
            url: 'https://www.rolandgarros.com',
            class: 'h-16'
          },
          {
            name: 'BitPay',
            img: 'bitpay.svg',
            url: 'https://bitpay.com',
            class: 'h-10'
          },
          {
            name: 'Ecosia',
            img: 'ecosia.svg',
            url: 'https://www.ecosia.org',
            class: 'h-16'
          },
          {
            name: 'Ozon',
            img: 'ozon.svg',
            url: 'https://www.ozon.ru',
            class: 'h-8'
          },
          {
            name: 'Sprinter',
            img: 'sprinter.svg',
            url: 'https://www.sprinter.es',
            class: 'h-8'
          },
          {
            name: 'BackMarket',
            img: 'backmarket.svg',
            url: 'https://www.backmarket.com',
            class: 'h-8'
          },
          {
            name: 'LINE',
            img: 'line.png',
            url: 'https://linecorp.com/?utm_source=nuxtjs&utm_medium=cases&utm_campaign=cases_list',
            class: 'h-8'
          }
        ],
        fr: [
          {
            name: 'Ubisoft',
            img: 'ubisoft.svg',
            url: 'https://assassinscreed.ubisoft.com/story-creator-mode',
            class: 'h-12'
          },
          {
            name: 'Maisons du monde',
            img: 'maisons-du-monde.svg',
            url: 'https://www.maisonsdumonde.com/',
            class: 'h-16'
          },
          {
            name: 'BackMarket',
            img: 'backmarket.svg',
            url: 'https://www.backmarket.fr',
            class: 'h-8'
          },
          {
            name: 'Faire',
            img: 'faire.png',
            url: 'https://www.faire.fr',
            class: 'h-16'
          },
          {
            name: 'Roland Garros',
            img: 'roland-garros.svg',
            url: 'https://www.rolandgarros.com',
            class: 'h-16'
          },
          {
            name: 'Spendesk',
            img: 'spendesk.svg',
            url: 'https://www.spendesk.com/fr',
            class: 'h-10'
          },
          {
            name: 'Luko',
            img: 'luko.svg',
            url: 'https://www.luko.eu',
            class: 'h-10'
          },
          {
            name: 'MyScript',
            img: 'my-script.svg',
            url: 'https://www.myscript.com/',
            class: 'h-10'
          },
          {
            name: 'Tediber',
            img: 'tediber.svg',
            url: 'https://www.tediber.com/',
            class: 'h-16'
          },
          {
            name: 'Voodoo',
            img: 'voodoo.png',
            url: 'https://www.voodoo.io',
            class: 'h-8'
          },
          {
            name: 'Le Collectionist',
            img: 'le-collectionist.svg',
            url: 'https://www.lecollectionist.com',
            class: 'h-8'
          },
          {
            name: 'HelloAsso',
            img: 'helloasso.svg',
            url: 'https://www.helloasso.com',
            class: 'h-8'
          },
          {
            name: 'Firago Immobilier',
            img: 'figaro-immobilier.svg',
            url: 'https://immobilier.lefigaro.fr',
            class: 'h-12'
          },
          {
            name: 'Arte',
            img: 'arte.svg',
            url: 'http://vandals.arte.tv',
            class: 'h-8'
          },
          {
            name: 'Ecosia',
            img: 'ecosia.svg',
            url: 'https://www.ecosia.org',
            class: 'h-16'
          }
        ],
      }
    }
  },
  computed: {
    langCompanies() {
      const locale = this.$i18n.locale
      const companies = this.companies[locale] || []

      // minimum 10 companies
      if (companies.length < 15 && locale !== 'en') {
        // Fill with english companies and remove duplicates
        return companies.concat(
          this.companies.en.filter(
            enCompany => !companies.find(c => c.img === enCompany.img)
          )
        )
      }
      return companies
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
