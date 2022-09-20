import { defineStore } from 'pinia';

export const useProfiloData = defineStore({
    id: 'ProfiloData',
    state: () => ({
        workExps: { 
            title: 'Esperienze lavorative',
            exp: [
                {
                    azienda: 'Isegno srl',
                    logo: 'logo_isegno.png',
                    posizione: 'IT & Web Developer',
                    durata: 'Maggio 2020 - oggi',
                    website: 'https://www.isegno.com'
                },
            ],
        },
        formazione: { 
            title: 'Formazione',
            exp: [
                {
                    azienda: 'Boolean Careers',
                    logo: 'logo_boolean.png',
                    posizione: 'Certificazione Full Stack Web Developer',
                    durata: '2019',
                    website: 'https://boolean.careers/'
                },
                {
                    azienda: 'I.T.T. Montani di Fermo',
                    logo: 'logo_montani.png',
                    posizione: 'Diploma in Informatica',
                    durata: '2018',
                    website: 'https://www.istitutomontani.edu.it/web/'
                },
            ],
        },
    })
});