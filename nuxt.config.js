export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        layoutTransition: {name: 'layout', mode: 'out-in'},
    },
    i18n: {
        vueI18n: './vue-i18n.ts',
    },
    css: ['~/assets/css/main.css'],
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