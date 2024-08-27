// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/', // ソースコードが `src` フォルダにあることを指定
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://pokeapi.co/api/v2/',
    },
  },
})
