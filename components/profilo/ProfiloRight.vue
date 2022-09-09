<template>
    <div class="profilo-section profilo-right-section">
        <ProfiloList :profiloData="workExps" />
        <ProfiloList :profiloData="formazione" />
    </div> 
</template>

<script>
export default {
    data() {
        return {
            workExps: { 
                title: 'Esperienze lavorative',
                exp: [
                    {
                        azienda: 'Isegno srl',
                        logo: 'logo_isegno.png',
                        posizione: 'IT & Web Developer',
                        durata: 'Maggio 2020 - oggi'
                    },
                ],
            },
            formazione: { 
                title: 'Formazione',
                exp: [
                    {
                        azienda: 'Boolean Careers',
                        logo: 'logo_boolean.png',
                        posizione: 'Full Stack Web Developer',
                        durata: 'Ottobre 2019 - Marzo 2020'
                    },
                    {
                        azienda: 'I.T.T. Montani di Fermo',
                        logo: 'logo_montani.png',
                        posizione: 'Diploma in Informatica',
                        durata: '2012-2018'
                    },
                ],
            },
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .profilo-right-section {
        margin: $min-margin + 2rem 0;
    }
}


@media screen and (min-width: $tablet) {
    .profilo-section {
        width: 35%;

        &.profilo-right-section {
            margin: 0;
        }
    }
}

@media screen and (min-width: $xl) {
    .profilo-section {
        width: 30%;
    }
}
</style>