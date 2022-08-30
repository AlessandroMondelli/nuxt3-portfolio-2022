<template>
    <div class="progetti-wrap">
        <ProgettiLang :projects="projects" :activeProject="activeProject" @return-value="getLang" />
        <Transition name="fade-left">
            <ProgettiList v-if="singleProjectClosed === true" :projectsArray="projectsArray" :key="clickedLang" @return-project="getProject" />
        </Transition>
        <Transition name="fade-left">
            <ProgettiSingleProgetto v-if="activeProject" :activeProject="activeProject.content" @closeProj="closeProj" />
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { 
                    projectLang: 'Layouts',
                    projectsList : [
                            { projectTitle: 'Spotify Web',
                                content: 
                                    {
                                        description: 'Riproduzione responsive del layout di Spotify Web',
                                        tech: [ 'html5', 'css' ],
                                        media: 'spotify'
                                    }
                            },
                            { projectTitle: 'Hubspot',
                                content:
                                    {
                                        description: 'Riproduzione del layout di Hubspot',
                                        tech: [ 'html5', 'css' ],
                                        media: 'hubspot'
                                    }
                            },
                            { projectTitle: 'Digital Ocean',
                                content:
                                    {
                                        description: 'Riproduzione responsive del layout di Digital Ocean',
                                        tech: [ 'html5', 'css' ],
                                        media: 'digital_ocean'
                                    }
                            },
                            { projectTitle: 'NowTV',
                                content:
                                    {
                                        description: 'Riproduzione responsive del layout di NowTv',
                                        tech: [ 'html5', 'css' ],
                                        media: 'nowtv'
                                    }
                            },
                    ]
                },
                { 
                    projectLang: 'Javascript',
                    projectsList : [
                            { projectTitle: 'Replica Whatsapp Web',
                                content:
                                    {
                                        description: 'Riproduzione responsive del layout di Whatsapp Web, con alcune funzioni come ricerca di utenti di una lista, invio di un messaggio con ricezione di una risposta "ok", timestamp di invio messaggio e eliminazione messaggi',
                                        tech: [ 'html5', 'css', 'javascript', 'jquery' ],
                                        media: 'whatsapp'
                                    }
                            },
                            { projectTitle: 'Replica catalogo Netflix',
                                content:
                                    {
                                        description: 'Applicazione Web simil Netflix, con film più votati in home page e ricerca per avere informazioni riguardo al film o serie tv ricercato, esegue chiamate REST API al database di TheMovieDB',
                                        tech: [ 'html5', 'css', 'javascript', 'jquery', 'handlebars' ],
                                        media: 'boolflix'
                                    }
                            },
                    ]
                },
                { 
                    projectLang: 'Vue.js e Nuxt.js',
                    projectsList : [
                            { projectTitle: 'Tombola', 
                                content:
                                {
                                    description: 'Applicazione Web che permette di generare un tabellone della tombola, con possibilità di estrarre numeri casuali e di generare una tabellina giocabile.',
                                    tech: [ 'html5', 'css', 'javascript', 'vue' ],
                                    media: 'tombola'
                                }
                            },
                            { projectTitle: 'VueCovid-19',
                                content:
                                    {
                                        description: 'Applicazione Web per la visualizzazione dei dati aggiornati di contagi COVID-19 tramite chiamata ad una API.',
                                        tech: [ 'html5', 'css', 'sass', 'javascript', 'vue' ],
                                        media: 'vue_covid'
                                    }
                            },
                            { projectTitle: 'Todo list con Firebase',
                                content:
                                    {
                                        description: 'Applicazione Web sviluppata in Nuxt.js 3, con la quale l\'utente può registrarsi e salvare una lista todo in un database Firebase.',
                                        tech: [ 'html5', 'css', 'sass', 'javascript', 'nuxt' ],
                                        media: 'todo'
                                    }
                            },
                    ]
                },
                { 
                    projectLang: 'Laravel',
                    projectsList : [
                            { projectTitle: 'Blog con CRUD per posts',
                                content:
                                    {
                                        description: 'Applicazione Web che simula un blog simil Wordpress, con registrazione utente e CRUD per creare/modificare/eliminare degli articoli',
                                        tech: [ 'html5', 'css', 'sass', 'php', 'mysql', 'laravel' ],
                                        media: 'boolpress'
                                    }
                            },
                            { projectTitle: 'BoolBnB',
                                content:
                                    {
                                        description: 'Applicazione Web che permette di registrarsi ed inserire appartamenti in vendita/affitto, presente funzione di sponsorizzazione con utilizzo di Braintree, funzione di messaggistica e ricerca di appartamenti in base alla zona ricercata',
                                        tech: [ 'html5', 'css', 'sass', 'php', 'mysql', 'laravel' ],
                                        media: 'boolbnb'
                                    }
                            },
                    ]
                },
                { 
                    projectLang: 'Wordpress',
                    projectsList : [
                            { projectTitle: 'Rebranding sito web aziendale', 
                                content:
                                    {
                                        description: 'Completa "ristrutturazione" del sito di un\'azienda con la quale collaboro attualmente. Lo stile ricercato per lo sviluppo di questo portale è minimale, che porti il cliente a captare subito il messaggio che l\'azienda ha da offrire.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'wordpress' ],
                                        media: ''
                                    }
                            },
                            { projectTitle: 'Portale esami con LMS per certificazione BIM',
                                content:
                                    {
                                        description: 'Applicazione web strutturato per permettere lo svolgimento di esami BIM da remoto, a causa delle distanze create dalla pandemia. Il sito è ancora utilizzato e resta il principale strumento per svolgere esami di certificazione BIM in Italia.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'mysql', 'wordpress' ],
                                        media: ''
                                    }
                            },
                            { projectTitle: 'E-Commerce per vendita certificazione BIM',
                                content:
                                    {
                                        description: 'E-Commerce che punta a vendere esami BIM, argomento inerente all\'azienda in collaborazione. Il sito offre la possibilità di prenotare esami tramite un calendario presente per ogni prodotto.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'mysql', 'wordpress' ],
                                        media: ''
                                    }
                            },
                            { projectTitle: 'E-Commerce e LMS corsi BIM',
                                content:
                                    {
                                        description: 'E-Commerce che vende corsi per la preparazione allo svolgimento di esami per la certificazione BIM. Applicazione web creata per automatizzare le lezioni, che prima venivano svolte in tempo reale.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'mysql', 'wordpress' ],
                                        media: ''
                                    }
                            },
                            { projectTitle: 'Portale Web per azienda esterna',
                                content:
                                    {
                                        description: 'Sito web di presentazione per un\'azienda di architettura svizzera.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'wordpress' ],
                                        media: ''
                                    }
                            },
                            { projectTitle: 'Plugin griglia progetti',
                                content:
                                    {
                                        description: 'Plugin che permette di generare una griglia di progetti personalizzata, scegliendo tra varie impostazioni di stile ed ottimizzazione sfruttando le settings API di Wordpress.',
                                        tech: [ 'css', 'javascript', 'jquery', 'php', 'wordpress' ],
                                        media: 'wordpress_griglia'
                                    }
                            },
                    ]
                },
                { 
                    projectLang: 'Google Apps Script',
                    projectsList : [
                            { projectTitle: 'Migratore eventi Google Calendar - Google Spreedsheet',
                                content:
                                    {
                                        description: 'Automazione scritta in Google Apps Script con lo scopo di recuperare degli eventi dal calendario Google e importarli in un Google Spreedsheet tramite un trigger automatico.',
                                        tech: [ 'javascript', 'apps_script' ],
                                        media: 'migratore',
                                    }
                            },
                            { projectTitle: 'Nuova commessa Timechart',
                                content:
                                    {
                                        description: 'Automazione scritta in Google Apps Script che, in sequenza: crea un nuovo sheet di commessa, chiede in input i collaboratori che parteciperanno ad essa, li invita al caledario e, infine, collega i dati creati e che verranno inseriti nel calendario nello spreedsheet di commessa con tanto di grafici e andamento.',
                                        tech: [ 'javascript', 'apps_script' ],
                                        media: 'commessa_timechart'
                                    }
                            }
                    ]
                }
            ],
            projectsArray: '',
            activeProject: false,
            singleProjectClosed: true,
            clickedLang: 0,
        }
    },
    methods: {
        getLang( e ) {
            for( var i = 0; i < this.projects.length; i++ ) {
                if( this.projects[i].projectLang == e ) {
                    this.projectsArray = this.projects[i].projectsList;
                    this.clickedLang++;
                }
            }
        },
        getProject( e ) {
            this.singleProjectClosed = false;
            setTimeout( () => {
                this.activeProject = e;
            }, 500 );
        },
        closeProj() {
            this.activeProject = false;
            setTimeout( () => {
                this.singleProjectClosed = true;
            }, 500 ) 
        } 
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .progetti-wrap {
        display: flex;
        flex-direction: row;
    }
}

@media screen and (min-width: $laptop) {
    .progetti-wrap {
        height: inherit;
        margin-top: $min-margin + 10rem;
    }
}
</style>