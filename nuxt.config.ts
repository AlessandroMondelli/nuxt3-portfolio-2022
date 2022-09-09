import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },

    css: [
        '@/assets/styles/scss/main.scss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [ 
                        '@import "@/assets/styles/scss/partials/variables.scss";'
                    ]
                },
            },
        },
    },

    runtimeConfig: { 
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_URL: process.env.FIREBASE_URL,
        }
    }
})
