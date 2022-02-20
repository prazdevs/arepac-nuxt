<script setup lang="ts">
const { descriptionText, membersText, membersMembers, partners, registration } =
  useContent()
</script>

<template>
  <section class="space-y-12" w:text="center">
    <!-- Save the date -->
    <SaveTheDate v-if="registration.open" :date="registration.date" />
    <!-- Description -->
    <div w:flex="~ col sm:row" w:space-y="2">
      <div w:mr="sm:4" w:w="sm:2/3">
        <SectionTitle h1 label="Qu'est ce que l'AREPAC?" />
        <div w:text="left">
          {{ descriptionText }}
        </div>
      </div>
      <div w:align="self-center" w:mt="4" w:w="3/4 sm:1/3">
        <img alt="" src="~/assets/svgs/medicine.svg" />
        <div></div>
      </div>
    </div>
    <!-- Members -->
    <div w:align="items-center" w:flex="~ col">
      <SectionTitle label="Les membres du bureau" />
      <div w:mb="2">
        {{ membersText }}
      </div>
      <img
        alt="Photo des membres du bureau"
        src="~/assets/images/membres.webp"
        w:w="sm:3/4"
      />
      <div w:font="italic" w:w="sm:3/4">
        {{ membersMembers }}
      </div>
    </div>
    <!-- Partners -->
    <div>
      <SectionTitle label="Les partenaires" />
      <div w:grid="~ cols-2 gap-4 sm:cols-3 md:cols-4">
        <a
          v-for="partner in partners"
          :key="partner.name"
          :href="partner.link"
          rel="noreferrer noopener"
          target="_blank"
          w:align="items-center"
          w:flex="~"
          w:h="full"
          w:p="2"
        >
          <img :alt="partner.name" src="~/assets/images/fake.webp" w:w="full" />
        </a>
      </div>
    </div>
    <!-- Newsletter -->
    <NewsletterForm />
  </section>
</template>
