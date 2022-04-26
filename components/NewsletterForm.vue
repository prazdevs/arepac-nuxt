<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3'

import IconMail from '~icons/gg/mail'
import IconUser from '~icons/gg/user'

const { newsletter } = useContent()
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const fullname = ref('')
const email = ref('')

async function submitForm() {
  await recaptchaLoaded()

  const token = await executeRecaptcha('newsletter')

  const { error } = await useFetch('/api/newsletter', {
    method: 'POST',
    body: { fullname: fullname.value, email: email.value, token },
  })

  const err = error.value?.response.status

  if (err) alert(`Une erreur est survenue`)
}
</script>

<template>
  <div w:bg="red-50" w:flex="~ col sm:row" w:p="2" w:px="sm:6" w:shadow="md">
    <img
      alt=""
      src="~/assets/svgs/newsletter.svg"
      w:align="self-center"
      w:mr="sm:3"
      w:mt="2 sm:0"
      w:w="2/3 sm:1/3"
    />
    <div w:w="sm:2/3">
      <SectionTitle label="La newsletter" />
      <p w:mb="2">{{ newsletter.text }}</p>
      <form novalidate @submit.prevent="submitForm">
        <!-- name -->
        <div w:flex="~ col" w:mb="2">
          <NewsletterField v-model="fullname" label="Nom complet">
            <template #icon>
              <IconUser />
            </template>
          </NewsletterField>
        </div>
        <!-- email -->
        <div w:flex="~ col" w:mb="2">
          <NewsletterField v-model="email" label="Email" type="email">
            <template #icon>
              <IconMail />
            </template>
          </NewsletterField>
        </div>
        <!-- button -->
        <button
          type="submit"
          w:bg="primary hover:secondary"
          w:border="rounded"
          w:font="bold"
          w:mb="2"
          w:outline="focus:primary"
          w:px="4"
          w:py="2"
          w:text="white"
        >
          S'inscrire à la newsletter
        </button>
      </form>
    </div>
  </div>
</template>
