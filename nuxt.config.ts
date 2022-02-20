import { defineNuxtConfig } from 'nuxt3'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  privateRuntimeConfig: {
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
  },
  buildModules: ['nuxt-windicss'],
  vite: {
    plugins: [
      Icons(),
      Components({
        resolvers: [IconsResolver()],
        dts: false,
      }),
    ],
  },
  css: ['typeface-open-sans', 'typeface-merriweather'],
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
