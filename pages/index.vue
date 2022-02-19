<script setup lang="ts">
const { descriptionText, membersText, membersMembers } = useContent()
</script>

<template>
  <section>
    <!-- Description -->
    <div w:flex="~ col sm:row" w:space-y="2">
      <div w:mr="sm:4" w:w="sm:2/3">
        <SectionTitle h1>
          {{ "Qu'est ce que l'AREPAC?" }}
        </SectionTitle>
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
    <div w:flex="~ col" w:align="center">
      <SectionTitle>
        {{ "Les membres du bureau" }}
      </SectionTitle>
      <div w:mb="2">
        {{ membersText }}
      </div>
      <img w:w="sm:3/4" src="" alt="Photo des membres du bureau" />
      <div w:text="italic">
        {{ membersMembers }}
      </div>
    </div>

    <!-- Partners -->
    <!-- Newsletter -->
  </section>
</template>
