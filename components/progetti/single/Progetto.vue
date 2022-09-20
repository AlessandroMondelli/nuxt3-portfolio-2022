<template>
    <div class="single-progetto-wrap">
        <div class="active-project">
            <CommonCloseTab @click="closeProj" />
            <ProgettiSingleProgettoLang :activeProject="activeProject" />
            <ProgettiSingleProgettoDescription :activeProject="activeProject" />
            <ProgettiSingleProgettoMedia v-if="activeProject.media != ''" :activeProject="activeProject" />
            <p class="privacy-warn text-small" v-else>Per rispettare la privacy dell'azienda, non verranno mostrati contenuti grafici. Per maggiori informazioni, inviare una richiesta tramite il form presente nella sezione contatti.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["activeProject"],
    methods: {
        closeProj() {
            this.$emit( 'close-proj' );
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .single-progetto-wrap {
        margin-top: $min-margin + 2rem;

        .close-project {
            text-align: right;
        }

        .privacy-warn {
            margin-bottom: $min-margin;
        }
    }
}

@media screen and (min-width: $tablet) {
    .single-progetto-wrap {
        margin-top: 0;
        margin-left: $min-margin + 2rem;
        max-width: 60%;
    }
}

@media screen and (min-width: $laptop) {
    .single-progetto-wrap {
        max-width: 50%;
    }
}
</style>