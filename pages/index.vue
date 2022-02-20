<script setup lang="ts">
const { descriptionText, membersText, membersMembers, partners } = useContent()
</script>

<template>
  <section class="space-y-12" w:text="center">
    <!-- Description -->
    <div w:flex="~ col sm:row" w:space-y="2">
      <div w:mr="sm:4" w:w="sm:2/3">
        <SectionTitle h1 label="Qu'est ce que l'AREPAC?" />
        <div w:text="left">
          {{ descriptionText }}
        </div>
      </div>
      <div w:w="3/4 sm:1/3" w:align="self-center">
        <img src="~/assets/svgs/medicine.svg" alt="" />
        <div></div>
      </div>
    </div>
    <!-- Members -->
    <div w:flex="~ col" w:align="items-center">
      <SectionTitle label="Les membres du bureau" />
      <div w:mb="2">
        {{ membersText }}
      </div>
      <img
        src="~/assets/images/membres.webp"
        alt="Photo des membres du bureau"
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
          target="_blank"
          rel="noreferrer noopener"
          :href="partner.link"
          :key="partner.name"
          w:flex="~"
          w:align="items-center"
          w:h="full"
          w:p="2"
        >
          <img 
            :alt="partner.name"
            src="~/assets/images/fake.webp"
            w:w="full" />
        </a>
      </div>
    </div>
    <!-- Newsletter -->
  </section>
</template>
