<template>
    <div class="section-content progetti">
        <div class="progetti-wrap">
            <ProgettiLang :projects="projects" @return-value="getLang" />
            <ProgettiList :projectsArray="projectsArray" @return-project="getProject" />
            <ProgettiSingleProgetto v-if="activeProject" :activeProject="activeProject.content" />
        </div>
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
                                content: [
                                    {
                                        description: 'Riproduzione responsive del layout di Spotify Web'
                                    }
                                ]
                            },
                            { projectTitle: 'Hubspot',
                                content: [
                                    {
                                        description: 'Riproduzione responsive del layout di Hubspot'
                                    }
                                ]
                            },
                            { projectTitle: 'Digital Ocean',
                                content: [
                                    {
                                        description: 'Riproduzione responsive del layout di Digital Ocean'
                                    }
                                ]
                            },
                            { projectTitle: 'NowTV',
                                content: [
                                    {
                                        description: 'Riproduzione responsive del layout di NowTv'
                                    }
                                ]
                            },
                    ]
                },
                { 
                    projectLang: 'Javascript',
                    projectsList : [
                            { projectTitle: 'Replica Whatsapp Web',
                                content: [
                                    {
                                        description: 'Riproduzione responsive del layout di Whatsapp Web, con alcune funzioni come ricerca di utenti di una lista, invio di un messaggio con ricezione di una risposta "ok", timestamp di invio messaggio e eliminazione messaggi'
                                    }
                                ]
                            },
                            { projectTitle: 'Replica catalogo Netflix',
                                content: [
                                        {
                                            description: 'Applicazione Web simil Netflix, con film più votati in home page e ricerca per avere informazioni riguardo al film o serie tv ricercato, esegue chiamate REST API al database di TheMovieDB'
                                        }
                                ]
                            },
                    ]
                },
                { 
                    projectLang: 'Vue.js e Nuxt.js',
                    projectsList : [
                            { projectTitle: 'Tombola', 
                                content: [
                                    {
                                        description: 'Applicazione Web che permette di generare un tabellone della tombola, con possibilità di estrarre numeri casuali e di generare una tabellina giocabile.'
                                    }
                                ]
                            },
                            { projectTitle: 'VueCovid-19',
                                content: [
                                    {
                                        description: 'Applicazione Web per la visualizzazione dei dati aggiornati di contagi COVID-19.'
                                    }
                                ]
                            },
                            { projectTitle: 'Todo list con Firebase',
                                content: [
                                    {
                                        description: 'Applicazione Web sviluppata in Nuxt.js 3, con la quale l\'utente può registrarsi e salvare una lista todo in un database Firebase.'
                                    }
                                ]
                            },
                    ]
                },
                { 
                    projectLang: 'Laravel',
                    projectsList : [
                            { projectTitle: 'Blog con CRUD per posts',
                                content: [
                                    {
                                        description: 'Applicazione Web che simula un blog simil Wordpress, con registrazione utente e CRUD per creare/modificare/eliminare degli articoli'
                                    }
                                ]
                            },
                            { projectTitle: 'BoolBnB',
                                content: [
                                    {
                                        description: 'Applicazione Web che permette di registrarsi ed inserire appartamenti in vendita/affitto, presente funzione di sponsorizzazione con utilizzo di Braintree, funzione di messaggistica e ricerca di appartamenti in base alla zona ricercata'
                                    }
                                ]
                            },
                    ]
                },
                { 
                    projectLang: 'Wordpress',
                    projectsList : [
                            { projectTitle: 'Rebranding sito web aziendale', 
                                content: [
                                    {
                                        description: 'Completa "ristrutturazione" del sito di un\'azienda con la quale collaboro attualmente. Lo stile ricercato per lo sviluppo di questo portale è minimale, che porti il cliente a captare subito il messaggio che l\'azienda ha da offrire.'
                                    }
                                ]
                            },
                            { projectTitle: 'Portale esami con LMS per certificazione BIM',
                                content: [
                                    {
                                        description: 'Applicazione web strutturato per permettere lo svolgimento di esami BIM da remoto, a causa delle distanze create dalla pandemia. Il sito è ancora utilizzato e resta il principale strumento per svolgere esami di certificazione BIM in Italia.'
                                    }
                                ]
                            },
                            { projectTitle: 'E-Commerce per vendita certificazione BIM',
                                content: [
                                    {
                                        description: 'E-Commerce che punta a vendere esami BIM, argomento inerente all\'azienda in collaborazione. Il sito offre la possibilità di prenotare esami tramite un calendario presente per ogni prodotto.'
                                    }
                                ]
                            },
                            { projectTitle: 'E-Commerce e LMS corsi BIM',
                                content: [
                                    {
                                        description: 'E-Commerce che vende corsi per la preparazione allo svolgimento di esami per la certificazione BIM. Applicazione web creata per automatizzare le lezioni, che prima venivano svolte in tempo reale.'
                                    }
                                ]
                            },
                            { projectTitle: 'Portale Web per azienda esterna',
                                content: [
                                    {
                                        description: 'Sito web di presentazione per un\'azienda di architettura svizzera.'
                                    }
                                ]
                            },
                    ]
                },
                { 
                    projectLang: 'Google Apps Script',
                    projectsList : [
                            { projectTitle: 'Migratore eventi Google Calendar - Google Spreedsheet',
                                content: [
                                    {
                                        description: 'Automazione scritta in Google Apps Script con lo scopo di recuperare degli eventi dal calendario Google e importarli in un Google Spreedsheet tramite un trigger automatico.'
                                    }
                                ]
                            },
                            { projectTitle: 'Nuova commessa Timechart',
                                content: [
                                    {
                                        description: 'Automazione scritta in Google Apps Script che, in sequenza: crea un nuovo sheet di commessa, chiede in input i collaboratori che parteciperanno ad essa, li invita al caledario e, infine, collega i dati creati e che verranno inseriti nel calendario nello spreedsheet di commessa con tanto di grafici e andamento.'
                                    }
                                ]
                            }
                    ]
                }
            ],
            projectsArray: '',
            activeProject: false,
        }
    },
    methods: {
        getLang( e ) {
            for( var i = 0; i < this.projects.length; i++ ) {
                if( this.projects[i].projectLang == e ) {
                    this.projectsArray = this.projects[i].projectsList;
                }
            }
        },
        getProject( e ) {
            this.activeProject = e;
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .section-content {
        justify-content: center;

        .progetti-wrap {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

    }
}
</style>