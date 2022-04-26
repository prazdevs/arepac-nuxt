import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', 'unplugin-icons/nuxt'],
  css: ['typeface-open-sans', 'typeface-merriweather'],
  privateRuntimeConfig: {
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
  },
  windicss: {
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
            secondary: '#fb868e',
          },
          boxShadow: {
            top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
  },
})
