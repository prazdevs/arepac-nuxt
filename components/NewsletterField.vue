<script setup lang="ts">
interface Props {
  modelValue: string
  type?: 'text' | 'email'
  label: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const slots = useSlots()
</script>

<template>
  <div w:align="self-center" w:position="relative" w:w="sm:2/3">
    <div
      v-if="slots.icon"
      w:border="~ transparent"
      w:flex="~"
      w:h="full"
      w:position="absolute left-0 top-0"
      w:w="10"
    >
      <div
        w:align="items-center"
        w:bg="gray-100"
        w:border="rounded-tl rounded-bl"
        w:flex="~"
        w:h="full"
        w:justify="center"
        w:text="gray-600 lg"
        w:w="full"
        w:z="10"
      >
        <slot name="icon"></slot>
      </div>
    </div>

    <input
      :aria-label="label"
      :placeholder="label"
      :type="type"
      :value="modelValue"
      w:border="~ rounded focus:primary"
      w:outline="focus:none"
      :w:pl="slots.icon ? 12 : 2"
      w:position="relative"
      w:pr="2"
      w:py="2"
      w:text="sm sm:base placeholder-gray-500"
      w:w="full"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
