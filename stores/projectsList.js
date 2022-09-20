import { defineStore } from 'pinia';

export const useProjectsList = defineStore({
    id: 'projectsList',
    state: () => ({
        projects: [
            { 
                projectLang: 'Layouts',
                projectsList : [
                        { projectTitle: 'Spotify Web',
                            content: 
                                {
                                    description: 'Riproduzione responsive del layout di Spotify Web.',
                                    tech: [ 'html5', 'css' ],
                                    media: 'spotify'
                                }
                        },
                        { projectTitle: 'Hubspot',
                            content:
                                {
                                    description: 'Riproduzione del layout di Hubspot.',
                                    tech: [ 'html5', 'css' ],
                                    media: 'hubspot'
                                }
                        },
                        { projectTitle: 'Digital Ocean',
                            content:
                                {
                                    description: 'Riproduzione responsive del layout di Digital Ocean.',
                                    tech: [ 'html5', 'css' ],
                                    media: 'digital_ocean'
                                }
                        },
                        { projectTitle: 'NowTV',
                            content:
                                {
                                    description: 'Riproduzione responsive del layout di NowTv.',
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
                                    description: 'Replica di Whatsapp Web, con alcune funzioni come: ricerca di utenti in una lista contatti, invio di un messaggio con ricezione di una risposta "ok" ed eliminazione dei messaggi.',
                                    tech: [ 'html5', 'css', 'javascript', 'jquery' ],
                                    media: 'whatsapp'
                                }
                        },
                        { projectTitle: 'Replica catalogo Netflix',
                            content:
                                {
                                    description: 'Applicazione Web simil Netflix, con film più votati in home page e ricerca per avere informazioni riguardo a film o serie tv, esegue chiamate REST API al database di TheMovieDB.',
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
                                    description: 'Progetto finale per Boolean Careers sviluppato in team. Applicazione Web che permette di registrarsi ed inserire appartamenti in vendita/affitto, presente funzione di sponsorizzazione con utilizzo di Braintree per accettare carte di credito, funzione di messaggistica e ricerca di appartamenti in base alla zona desiderata.',
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
                                    description: 'Completa "ristrutturazione" del sito dell\'azienda con la quale collaboro attualmente. Stile minimal, con l\'obiettivo di portare il cliente a captare subito il servizio che l\'azienda ha da offrire.',
                                    tech: [ 'css', 'javascript', 'jquery', 'php', 'wordpress' ],
                                    media: ''
                                }
                        },
                        { projectTitle: 'Portale esami con LMS per certificazione BIM',
                            content:
                                {
                                    description: 'Applicazione web strutturata per svolgere esami BIM da remoto, a causa delle distanze create dalla pandemia. Il sito è ancora utilizzato e resta il principale strumento per svolgere esami di certificazione BIM in Italia.',
                                    tech: [ 'css', 'javascript', 'jquery', 'php', 'mysql', 'wordpress' ],
                                    media: ''
                                }
                        },
                        { projectTitle: 'E-Commerce per vendita certificazione BIM',
                            content:
                                {
                                    description: 'E-Commerce che punta a vendere esami BIM, argomento inerente all\'azienda con la quale collaboro attualmente. Il sito offre la possibilità di prenotare esami tramite un calendario presente per ogni prodotto.',
                                    tech: [ 'css', 'javascript', 'jquery', 'php', 'mysql', 'wordpress' ],
                                    media: ''
                                }
                        },
                        { projectTitle: 'E-Commerce e LMS corsi BIM',
                            content:
                                {
                                    description: 'E-Commerce che vende corsi per la preparazione allo svolgimento di esami per la certificazione BIM. Applicazione web creata per automatizzare le lezioni, che, prima della creazione della stessa, venivano svolte in diretta.',
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
                                    description: 'Plugin che permette di generare una griglia di progetti personalizzata, scegliendo tra varie impostazioni di stile ed ottimizzazione (lazyload) sfruttando le settings API di Wordpress.',
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
                                    description: 'Automazione scritta in Google Apps Script con lo scopo di recuperare degli eventi da un calendario Google ed importarli in un Google Spreedsheet tramite un trigger automatico.',
                                    tech: [ 'javascript', 'apps_script' ],
                                    media: 'migratore',
                                }
                        },
                        { projectTitle: 'Nuova commessa Timechart',
                            content:
                                {
                                    description: 'Automazione scritta in Google Apps Script che in sequenza: crea un nuovo sheet di commessa, chiede in input i collaboratori che parteciperanno ad essa, li invita al caledario (tramite invito ad email aziendali interne) e, infine, collega i dati creati nello spreedsheet di commessa con tanto di grafici e andamento.',
                                    tech: [ 'javascript', 'apps_script' ],
                                    media: 'commessa_timechart'
                                }
                        }
                ]
            }
        ],
    }),
});