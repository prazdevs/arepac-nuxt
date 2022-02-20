import { VueReCaptcha } from 'vue-recaptcha-v3'

import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(_nuxtApp => {
  _nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: '6LfVwo4eAAAAAMCJyUGMPFyFCzA_9D7mNBTGCIJr',
    loaderOptions: { autoHideBadge: true },
  })
})
