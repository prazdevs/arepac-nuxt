import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss'],
  css: [
    'typeface-open-sans',
    'typeface-merriweather',
  ],
  windicss:{
    config: {
      attributify: { prefix: 'w:' },
      darkMode: false,
      theme: {
        fontFamily: {
          sans: ['Open Sans'],
          serif: ['Merriweather'],
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
