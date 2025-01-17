export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxt/icon'
  ],
  ssr: false,
})