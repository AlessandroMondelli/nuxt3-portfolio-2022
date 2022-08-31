<template>
    <div class="contatti-content-wrap">
        <ContattiForm @form-error="getError" />
        <Transition name="fade-up">
            <p class="form-error text-small" v-if="formError">I campi non possono essere vuoti, riprova.</p>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formError: false,
        }
    },
    methods: {
        getError(e) {
            if( e ) {
                this.formError = e;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.contatti-content-wrap {
    margin-top: $min-margin;

    .form-error {
        margin-top: $min-margin - 1rem;
    }
}
</style>