import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-windicss'],
  windicss:{
    config: {
      attributify: { prefix: 'w:' },
      darkMode: false,
      theme: {
        fontFamily: {
          sans: [],
          serif: [],
        },
        extend: {
          colors: {
            primary: '#f51858',
            secondary: '#fb868e'
          }
        }
      },
    }
  }
})
