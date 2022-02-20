<template>
  <div w:flex="~ col" w:font="sans" w:min-h="screen" w:text="gray-900">
    <LayoutHeader />
    <main
      w:flex="1"
      w:max-w="4xl"
      w:mx="auto"
      w:px="4 md:8"
      w:py="8 "
      w:w="full"
    >
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
