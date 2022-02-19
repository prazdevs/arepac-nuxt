<script setup lang="ts">
const { headerLinks, isExpanded } = useNav()
const { title } = useSiteMetadata()
const { afterEach } = useRouter()

afterEach(() => { isExpanded.value = false })
</script>

<template>
  <header w:bg="gray-300" w:shadow="md">
    <div 
      w:flex="~ wrap"
      w:align="items-center"
      w:justify="between"
      w:max-w="4xl"
      w:p="4 sm:8"
      w:mx="auto"
    >
      <NuxtLink 
        to="/"
        w:flex="~"
        w:align="items-center"
        w:text="black no-underline hover:primary"
      >
        <img w:mr="2" w:h="10" src="~/assets/svgs/arepac.svg" alt="" />
        <span w:text="3xl uppercase" w:font="serif">
          {{ title }}
        </span>
      </NuxtLink>
      <button 
        w:flex="~"
        w:align="items-center"
        w:border="rounded"
        w:display="sm:hidden"
        w:text="2xl black"
        aria-label="Menu"
        @click="isExpanded = !isExpanded"
      >
        <i-gg-close v-if="isExpanded" />
        <i-gg-menu v-else />
      </button>
      <nav
        w:w="full sm:auto"
        w:flex="sm:~"
        w:align="sm:items-center"
        :w:display="isExpanded ? 'sm:block' : 'hidden'"
      >
        <div 
          v-for="link in headerLinks"
          w:display="block sm:inline-block"
          w:mt="4 sm:0"
          w:ml="sm:6"
          w:text="lg black hover:primary"
          w:font="bold"
          :key="link.route"
        >
          <NuxtLink :to="link.route" v-slot="{ isActive }">
            <span
              :w:text="isActive ? 'primary' : ''"
              :w:border="isActive ? 'b-2 primary' : ''"
            >
              {{ link.label }}
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
