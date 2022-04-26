<script setup lang="ts">
import IconClose from '~icons/gg/close'
import IconMenu from '~icons/gg/menu'

const { headerLinks, isExpanded } = useNav()
const { title } = useSiteMetadata()
const { afterEach } = useRouter()

afterEach(() => {
  isExpanded.value = false
})
</script>

<template>
  <header w:bg="gray-300" w:shadow="md">
    <div
      w:align="items-center"
      w:flex="~ wrap"
      w:justify="between"
      w:max-w="4xl"
      w:mx="auto"
      w:p="4 sm:8"
    >
      <NuxtLink
        to="/"
        w:align="items-center"
        w:flex="~"
        w:text="black no-underline hover:primary"
      >
        <img alt="" src="~/assets/svgs/arepac.svg" w:h="10" w:mr="2" />
        <span w:font="serif" w:text="3xl uppercase">
          {{ title }}
        </span>
      </NuxtLink>
      <button
        aria-label="Menu"
        w:align="items-center"
        w:border="rounded"
        w:display="sm:hidden"
        w:flex="~"
        w:text="2xl black"
        @click="isExpanded = !isExpanded"
      >
        <IconClose v-if="isExpanded" />
        <IconMenu v-else />
      </button>
      <nav
        w:align="sm:items-center"
        :w:display="isExpanded ? 'sm:block' : 'hidden'"
        w:flex="sm:~"
        w:w="full sm:auto"
      >
        <div
          v-for="link in headerLinks"
          :key="link.route"
          w:display="block sm:inline-block"
          w:font="bold"
          w:ml="sm:6"
          w:mt="4 sm:0"
          w:text="lg black hover:primary"
        >
          <NuxtLink v-slot="{ isActive }" :to="link.route">
            <span
              :w:border="isActive ? 'b-2 primary' : ''"
              :w:text="isActive ? 'primary' : ''"
            >
              {{ link.label }}
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
