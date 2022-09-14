import { defineStore } from 'pinia';

export const useSkillsList = defineStore({
    id: 'skillList',
    state: () => ({
        softSkills: [ 
            'Problem Solving', 
            'Capacità di adattamento', 
            'Propenso al lavoro di squadra', 
            'Propenso alla formazione continua', 
            'Gestione organizzata delle task', 
            'Puntualità' 
        ],
        hardSkills: [ 
            {
                lang: 'HTML',
                icon: 'html5',
                perc: '80',
            },
            {
                lang: 'CSS',
                icon: 'css',
                perc: '75',
            },
            {
                lang: 'SCSS',
                icon: 'sass',
                perc: '70',
            },
            {
                lang: 'JavaScript',
                icon: 'javascript',
                perc: '75',
            },
            {
                lang: 'JQuery',
                icon: 'jquery',
                perc: '70',
            },
            {
                lang: 'Vue.js',
                icon: 'vue',
                perc: '70',
            },
            {
                lang: 'Nuxt.js',
                icon: 'nuxt',
                perc: '65',
            },
            {
                lang: 'PHP',
                icon: 'php',
                perc: '70',
            },
            {
                lang: 'MySQL',
                icon: 'mysql',
                perc: '65',
            },
            {
                lang: 'Laravel',
                icon: 'laravel',
                perc: '60',
            },
            {
                lang: 'Wordpress',
                icon: 'wordpress',
                perc: '75',
            },
            {
                lang: 'Google Apps Script',
                icon: 'apps_script',
                perc: '70',
            },
            {
                lang: 'GIT Versioning',
                icon: 'git',
                perc: '80',
            }
        ]
    }),
});