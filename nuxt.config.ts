// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  imports: {
    autoImport: true, // 自動インポートを有効にする
    dirs: [
      'stores', // `stores`ディレクトリ内のストアファイルを自動的にインポート
    ],
  },
  css: [
    '~/assets/css/main.css', 
  ],
  // 実行時の設定を定義
  runtimeConfig: {
    public: {
      // 環境変数 API_BASE_URL が設定されていればそれを使用し、設定されていなければデフォルトとして PokéAPI の URL を使用
      apiBaseUrl: process.env.API_BASE_URL || 'https://pokeapi.co/api/v2/',
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})
