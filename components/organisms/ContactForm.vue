<template>
  <div class="container mx-auto px-4 pb-12">
    <section id="contact-form" class="px-3 py-8 -mx-4 text-center rounded-t-lg lg:mx-0">
      <i18n
        path="contact.message"
        tag="h2"
        class="mb-2 text-3xl font-medium transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
      >
        <template #message>
          <span class="text-nuxt-lightgreen">{{ $t('contact.a2') }}</span>
        </template>
      </i18n>
      <p class="mb-6 transition-colors duration-300 ease-linear text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary">
        {{ $t('contact.anon') }}
      </p>


      <form class="justify-center" data-cy="contact" @submit.prevent="send_form">
        <div class='p-3'>
          <label for="contact-email" class="hidden">{{ $t('contact.form.email') }}</label>
          <input id="contact-email" v-model="email" type="email"
            :placeholder="$t('contact.form.email')" aria-label="Contact email"
            class="w-full md:w-2/3 lg:w-1/2 px-4 py-3 font-medium border rounded rounded-r-none outline-none
            bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base" />
        </div>
        <div class='p-3'>
          <label for="contact-message" class="hidden">{{ $t('contact.form.message') }}</label>
          <textarea id="contact-message" v-model="message" type="text" required
                 :placeholder="$t('contact.form.message')" aria-label="Contact message"
                 class="w-full md:w-2/3 lg:w-1/2 h-48 px-4 py-3 font-medium border rounded rounded-r-none outline-none
            bg-light-elevatedSurface text-light-onSurfacePrimary focus:border-primary-base" />
        </div>
        <input
          type="submit" name="send-message"
          :value="pending ? $t('contact.form.sending'): $t('contact.form.send')"
          class="inline-block px-4 py-2 text-sm text-base font-medium text-white uppercase rounded shadow cursor-pointer bg-primary-base hover:bg-primary-light hover:shadow-md"
          :class="[pending ? 'bg-nuxt-green' : '']"
        />
      </form>


      <p v-if="sent" class="py-1 text-nuxt-green">
        {{ $t('contact.form.sent') }}
      </p>
      <p v-if="error" class="py-1 text-red-600">
        {{ error }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      pending: false,
      sent: false,
      error: null
    }
  },
  methods: {
    async send_form() {
      if (!this.message.trim()) {
        return
      }
      this.error = null
      this.pending = true
      if (this.pending) { // delete this after server
        this.sent = true
        this.pending = false
        return
      }
      try {
        await new Promise(resolve => setTimeout(resolve, 400))
        await this.$http.$post(`${process.env.NUXT_API}/contact`, {
          email: this.email,
          message: this.message
        })
        this.sent = true
        this.pending = false
      } catch (err) {
        this.pending = false
        if (err.response) {
          const { code } = await err.response.json()
          if (code === 'some-error') {
            this.error = 'An error happened.'
            return
          }
        }
        this.error = 'Unknown error'
      }
    }
  }
}
</script>
