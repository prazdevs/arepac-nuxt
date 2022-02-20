<script setup lang="ts">
const props = defineProps<{ date: string }>()

const formattedDate = computed(() =>
  new Date(props.date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
)
</script>

<template>
  <div
    role="alert"
    w:bg="red-50"
    w:flex="~"
    w:border="primary t-2 rounded-b"
    w:shadow="md"
    w:px="3"
    w:py="2"
    w:text="primary left"
  >
    <img
      alt=""
      src="~/assets/svgs/calendar.svg"
      w:align="self-center"
      w:display="hidden sm:block"
      w:h="20"
      w:mr="3"
    />
    <div w:flex="~ col" w:w="full">
      <p w:font="bold">
        {{ "Save the date!" }}
      </p>
      <p>
        {{ `Le prochain congrès aura lieu le ${formattedDate}, pour y participer, pensez à remplir le formulaire d'inscription` }}
      </p>
      <NuxtLink 
        to="/congress/#congress-form"
        w:align="self-end"
        w:font="semibold"
        w:text="underline hover:no-underline"
      >
        {{ "S'inscrire →" }}
      </NuxtLink>
    </div>
  </div>
</template>