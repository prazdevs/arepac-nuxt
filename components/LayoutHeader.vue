<script setup lang="ts">
const { headerLinks, isExpanded } = useNav()
</script>

<template>
  <header class="header">
    <div class="header__content">
      <nuxt-link to="/" class="header__brand">
        <img class="header__brand-img" src="~/assets/arepac.svg" alt="" />
        <span class="header__brand-text">arepac</span>
        
      </nuxt-link>
      <button 
        class="header__menu-button"
        aria-label="Menu"
        @click="isExpanded = !isExpanded"
      >
        X
        <!-- hamburger icon -->
      </button>
      <nav class="header__nav" :w:display="isExpanded ? 'block' : 'hidden'">
        <div 
          v-for="link in headerLinks"
          class="header__nav-link" 
          :key="link.route"
        >
          <nuxt-link :to="link.route" active-class="header__nav-link--active">
            {{ link.label }}
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="postcss">
  .header {
    @apply bg-gray-300 shadow-md
  }
  .header__content {
    @apply flex flex-wrap items-center justify-between
    @apply max-w-4xl p-4 mx-auto sm:p-8
  }

  .header__brand {
    @apply flex items-center
    @apply text-black no-underline
    @apply hover:text-primary
  }

  .header__brand-img {
    @apply mr-2 h-10
  }

  .header__brand-text {
    @apply font-serif text-3xl uppercase
  }

  .header__menu-button {
    @apply flex items-center block rounded sm:hidden
    @apply text-black
  }

  .header__nav {
    @apply w-full sm:w-auto sm:block sm:flex sm:items-center
  }

  .header__nav-link {
    @apply block mt-4 sm:inline-block sm:mt-0 sm:ml-6
    @apply font-bold text-black text-lg
    @apply hover:text-primary
  }

  .header__nav-link--active {
    @apply text-primary border-b-2 border-primary
  }
</style>