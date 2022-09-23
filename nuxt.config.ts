import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
        ],
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=" + process.env.GOOGLE_ANALYTICS_ID,
                async: true,
            },
            {
                src: "@/assets/scripts/ga.js",
            }
        ]
    },

    css: [
        '@/assets/styles/scss/main.scss',
    ],

    modules: [
        '@pinia/nuxt',
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
        plugins: [
            Icons({
              autoInstall: true
            })
        ]
    },

    runtimeConfig: { 
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_URL: process.env.FIREBASE_URL,
        }
    }
})
