<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3'

const { newsletter } = useContent()
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const fullName = ref('')
const email = ref('')

async function submitForm () {
  await recaptchaLoaded()

  const token = await executeRecaptcha('newsletter')
  console.log(token)
}
</script>

<template>
  <div
    w:bg="red-50"
    w:flex="~ col sm:row"
    w:shadow="md"
    w:p="2"
    w:px="sm:6"
  >
    <img 
      alt=""
      src="~/assets/svgs/newsletter.svg"
      w:align="self-center"
      w:w="2/3 sm:1/3"
      w:mt="2 sm:0"
      w:mr="sm:3"
    />
    <div w:w="sm:2/3">
      <SectionTitle label="La newsletter" />
      <p w:mb="2">{{ newsletter.text }}</p>
      <form novalidate @submit.prevent="submitForm">
        <!-- name -->
        <div w:flex="~ col" w:mb="2">
          <NewsletterField label="Nom complet" v-model="fullName">
            <template #icon>
              <i-gg-user />
            </template>
          </NewsletterField>
        </div>
        <!-- email -->
        <div w:flex="~ col" w:mb="2">
          <NewsletterField label="Email" type="email" v-model="email">
            <template #icon>
              <i-gg-mail />
            </template>
          </NewsletterField>
        </div>
        <!-- button -->
        <button
          type="submit"
          w:bg="primary hover:secondary"
          w:outline="focus:primary"
          w:text="white"
          w:font="bold"
          w:border="rounded"
          w:py="2"
          w:px="4"
          w:mb="2"
        >
          {{ "S'inscrire à la newsletter" }}
        </button>
      </form>
    </div>
  </div>
</template>