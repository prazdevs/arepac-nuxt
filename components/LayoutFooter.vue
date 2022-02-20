<script setup lang="ts">
const { footerLinks } = useNav()
const { copyright } = useSiteMetadata()
</script>

<template>
  <footer w:bg="gray-300" w:shadow="top">
    <nav
      w:align="items-center"
      w:flex="~ col sm:row"
      w:justify="sm:between"
      w:max-w="4xl"
      w:mx="auto"
      w:p="4 md:8"
      w:space-y="1"
    >
      <p w:text="black">
        {{ copyright }}
      </p>
      <div
        w:align="items-center sm:items-end"
        w:flex="~ col"
        w:space-y="2 sm:0"
      >
        <NuxtLink
          v-for="link in footerLinks"
          :key="link.route"
          :to="link.route"
          w:text="underline hover:no-underline"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </footer>
</template>
