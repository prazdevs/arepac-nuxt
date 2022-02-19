<template>
  <div class="layout">
    <layout-header />
    <main class="content">
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<style scoped lang="postcss">
  .layout {
    @apply flex flex-col min-h-screen
    @apply font-sans text-gray-900
  }

  .content {
    @apply flex-1 w-full max-w-4xl
    @apply px-4 py-8 mx-auto md:px-8 md:py-8
  }
</style>