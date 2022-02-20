<script setup lang="ts">
defineProps<{ h1?: boolean; label: string }>()
</script>

<template>
  <div w:flex="~" w:justify="center" w:mb="4" w:text="2xl">
    <component
      :is="h1 ? 'h1' : 'h2'"
      w:border="b-2 secondary"
      w:font="normal"
      w:m="0"
      w:text="2xl"
    >
      {{ label }}
    </component>
  </div>
</template>
