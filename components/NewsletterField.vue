<script setup lang="ts">
interface Props {
  modelValue: string
  type?: "text" | "email"
  label: string
}

withDefaults(defineProps<Props>(), {
  type: "text",
  label: "",
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const slots = useSlots()
</script>

<template>
  <div w:position="relative" w:align="self-center" w:w="sm:2/3">
    <div
      v-if="slots.icon"
      w:position="absolute left-0 top-0"
      w:flex="~"
      w:border="~ transparent"
      w:h="full"
      w:w="10"
    >
      <div
        w:flex="~"
        w:align="items-center"
        w:justify="center"
        w:border="rounded-tl rounded-bl"
        w:z="10"
        w:bg="gray-100"
        w:text="gray-600 lg"
        w:h="full"
        w:w="full"
      >
        <slot name="icon"></slot>
      </div>
    </div>

    <input
      :value="modelValue"
      :type="type"
      :aria-label="label"
      :placeholder="label"
      w:text="sm sm:base placeholder-gray-500"
      w:position="relative"
      w:w="full"
      w:border="~ rounded focus:primary"
      w:outline="focus:none"
      w:py="2"
      w:pr="2"
      :w:pl="slots.icon ? 12 : 2"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>