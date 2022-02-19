<script setup lang="ts">
defineProps<{ h1?: boolean }>()
</script>

<template>
  <div w:mb="4" w:flex="~" w:justify="center">
    <component
      :is="h1 ? 'h1' : 'h2'"
      w:text="2xl"
      w:font="normal"
      w:border="b-2 secondary"
    >
      <slot></slot>
    </component>
  </div>
</template>
