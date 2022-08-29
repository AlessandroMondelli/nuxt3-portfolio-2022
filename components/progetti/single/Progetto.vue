<template>
    <div class="single-progetto-wrap">
        <div class="active-project">
            <div class="close-project" @click="closeProj">X</div>
            <ProgettiSingleProgettoLang :activeProject="activeProject" />
            <ProgettiSingleProgettoDescription :activeProject="activeProject" />
            <ProgettiSingleProgettoMedia v-if="activeProject.media != ''" :activeProject="activeProject" />
            <p class="privacy-warn text-small" v-else>Per rispettare la privacy dell'azienda, non verranno mostrati contenuti grafici.</p>
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
</style>