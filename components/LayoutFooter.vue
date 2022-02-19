<script setup lang="ts">
const { footerLinks } = useNav()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <nav class="footer__nav">
      <p class="footer__nav-copyright">
        {{ `© Copyright ${year} - AREPAC` }}
      </p>
      <div class="footer__nav-links">
        <nuxt-link 
          v-for="link in footerLinks"
          class="footer__nav-link"
          :to="link.route"
        >
          {{ link.label }}
        </nuxt-link>
      </div>
    </nav>
  </footer>
</template>

<style scoped lang="postcss">
  .footer {
    @apply bg-gray-300 shadow-md
  }

  .footer__nav {
    @apply flex flex-col items-center sm:flex-row sm:justify-between
    @apply space-y-1 max-w-4xl p-4 mx-auto md:p-8
  }

  .footer__nav-copyright {
    @apply text-black
  }

  .footer__nav-links {
    @apply flex flex-col items-center sm:items-end
    @apply space-y-2 sm:space-y-0
  }

  .footer__nav-link {
    @apply underline hover:no-underline
  }
</style>