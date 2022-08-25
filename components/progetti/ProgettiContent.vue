<template>
    <div class="section-content progetti">
        <div class="progetti-wrap">
            <div class="progetto-single" v-for="projectGroup in projects" :key="projectGroup">
                <h2>{{ projectGroup.projectLang }}</h2>
                <ul>
                    <li v-for="project in projectGroup.projectsList" :key="project">{{project.projectTitle}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { 
                    projectLang: 'HTML/CSS',
                    projectsList : [
                            { projectTitle: 'Spotify Web' },
                            { projectTitle: 'Hubspot' },
                            { projectTitle: 'Digital Ocean' },
                            { projectTitle: 'NowTV' },
                    ]
                },
                { 
                    projectLang: 'HTML/CSS + Javascript',
                    projectsList : [
                            { projectTitle: 'Replica Whatsapp Web' },
                            { projectTitle: 'Replica Netflix (catalogo film e serie TV)' },
                    ]
                },
                { 
                    projectLang: 'Vue.js & Nuxt.js',
                    projectsList : [
                            { projectTitle: 'Tombola' },
                            { projectTitle: 'VueCovid-19' },
                            { projectTitle: 'Todo list con Firebase' },
                    ]
                },
                { 
                    projectLang: 'Laravel',
                    projectsList : [
                            { projectTitle: 'Blog con CRUD per posts' },
                            { projectTitle: 'BoolBnB' },
                    ]
                },
                { 
                    projectLang: 'Wordpress',
                    projectsList : [
                            { projectTitle: 'Rebranding sito web aziendale' },
                            { projectTitle: 'Portale esami con LMS per certificazione BIM' },
                            { projectTitle: 'E-Commerce per vendita certificazione BIM' },
                            { projectTitle: 'E-Commerce e LMS corsi BIM' },
                            { projectTitle: 'Portale Web per azienda esterna' },
                    ]
                },
                { 
                    projectLang: 'Google Apps Script',
                    projectsList : [
                            { projectTitle: 'Timechart' },
                            { projectTitle: 'Portale esami con LMS per certificazione BIM' },
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.section-content {
    justify-content: center;
}
</style>