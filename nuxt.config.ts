// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/', // ソースコードが `src` フォルダにあることを指定
  imports: {
    autoImport: true, // 自動インポートを有効にする
  },
  // 実行時の設定を定義
  runtimeConfig: {
    // 公開（クライアントサイドでも使用可能）設定
    public: {
      // API のベースURLを設定
      // 環境変数 API_BASE_URL が設定されていればそれを使用し、設定されていなければデフォルトとして PokéAPI の URL を使用
      apiBaseUrl: process.env.API_BASE_URL || 'https://pokeapi.co/api/v2/',
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],

})
