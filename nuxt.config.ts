export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  runtimeConfig: {
    public: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'John Nehry Dedoro | Portfolio',
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/contentful', mode: 'client' },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

},);