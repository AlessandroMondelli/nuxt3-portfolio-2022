<template>
    <div class="contatti-content-wrap">
        <ContattiHero :formSent="formSent" />
        <ContattiForm @form-sent="getFormSent" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            formSent: false,
        }
    },
    methods: {
        getFormSent( e ) {
            if( e ) {
                this.formSent = true;
            }
        }   
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .contatti-content-wrap {
        padding-bottom: $min-margin;
    }
}

@media screen and (min-width: $tablet) {
    .contatti-content-wrap {
        display: flex;
        justify-content: space-between;
        height: 85%;
        padding-bottom: 0;
    }
}

</style>