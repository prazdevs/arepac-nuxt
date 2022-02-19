<script setup lang="ts">
const { footerLinks } = useNav()
const { copyright } = useSiteMetadata()
</script>

<template>
  <footer w:bg="gray-300" w:shadow="top">
    <nav 
      w:flex="~ col sm:row"
      w:align="items-center"
      w:justify="sm:between"
      w:space-y="1"
      w:max-w="4xl"
      w:p="4 md:8"
      w:mx="auto"
    >
      <p w:text="black">
        {{ copyright }}
      </p>
      <div 
        w:flex="~ col"
        w:align="items-center sm:items-end"
        w:space-y="2 sm:0"
      >
        <NuxtLink
          v-for="link in footerLinks"
          w:text="underline hover:no-underline"
          :to="link.route"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>
