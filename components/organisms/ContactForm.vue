<template>
  <div class="bg-light-surface dark:bg-dark-surface">
    <div class="container mx-auto px-4 pb-12">
      <section
        id="contact-form"
        class="px-3 py-8 -mx-4 text-center rounded-t-lg lg:mx-0"
      >
        <i18n
          path="contact.message"
          tag="h2"
          class="mb-2 text-3xl font-medium transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
        >
          <template #message>
            <span class="text-nuxt-lightgreen">{{ $t('contact.a2') }}</span>
          </template>
          <template #break>
            <br />
          </template>
        </i18n>
        <i18n
          path="contact.anon"
          tag="p"
          class="mb-6 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
        >
          <template #break>
            <br />
          </template>
          <template #server>
            <a
              href="https://github.com/Emrin/aws-lambda-ses-recaptcha"
              target="_blank"
              rel="noopener noreferrer"
              >AWS Frankfurt</a
            >
          </template>
        </i18n>

        <form
          v-if="!sent"
          class="justify-center"
          data-cy="contact"
          @submit.prevent="send_form"
        >
          <div class="p-3">
            <label for="contact-email" class="hidden">{{
              $t('contact.form.email')
            }}</label>
            <input
              id="contact-email"
              v-model="email"
              type="email"
              :placeholder="$t('contact.form.email')"
              aria-label="Contact email"
              class="w-full md:w-2/3 lg:w-1/2 px-4 py-3 font-medium border rounded outline-none bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base"
            />
          </div>
          <div class="p-3 hidden">
            <label for="contact-subject" class="hidden">{{
              $t('contact.form.subject')
            }}</label>
            <input
              id="contact-subject"
              v-model="subject"
              type="text"
              :placeholder="$t('contact.form.subject')"
              aria-label="Contact email"
              class="w-full md:w-2/3 lg:w-1/2 px-4 py-3 font-medium border rounded outline-none bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base"
            />
          </div>
          <div class="p-3">
            <label for="contact-message" class="hidden">{{
              $t('contact.form.message')
            }}</label>
            <textarea
              id="contact-message"
              v-model="message"
              type="text"
              required
              :placeholder="$t('contact.form.message')"
              aria-label="Contact message"
              class="w-full md:w-2/3 lg:w-1/2 h-48 px-4 py-3 font-medium border rounded outline-none bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base"
            />
          </div>
          <input
            type="submit"
            name="send-message"
            :value="
              pending ? $t('contact.form.sending') : $t('contact.form.send')
            "
            class="inline-block px-4 py-2 text-sm text-base font-medium text-white uppercase rounded shadow cursor-pointer bg-primary-base hover:bg-primary-light hover:shadow-md"
            :class="[pending ? 'bg-nuxt-green' : '']"
          />
        </form>

        <p
          v-if="sent"
          class="text-3xl font-medium transition-colors duration-300 ease-linear text-nuxt-lightgreen"
        >
          {{ $t('contact.form.sent') }}
        </p>
        <p v-if="error" class="py-1 text-red-600">
          {{ error }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      message: '',
      pending: false,
      sent: false,
      error: null
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
      this.error = 'ReCaptcha Error. Refresh the page and try again.'
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    async send_form() {
      if (!this.message.trim()) {
        return
      }
      this.error = null
      this.pending = true
      try {
        const token = await this.$recaptcha.execute('submit')
        await new Promise(resolve => setTimeout(resolve, 400))
        await this.$http.$post(
          'https://h9s5036w93.execute-api.eu-central-1.amazonaws.com/default/fun1',
          {
            email: this.email,
            subject: this.subject,
            message: this.message,
            token
          }
        )
        this.sent = true
        this.pending = false
      } catch (err) {
        this.pending = false
        this.error = 'Error. Refresh the page and try again.'
      }
    }
  }
}
</script>
