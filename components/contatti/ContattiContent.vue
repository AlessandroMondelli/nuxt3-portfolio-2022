<template>
    <div class="contatti-content-wrap">
        <ContattiHero />
        <ContattiForm />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .contatti-content-wrap {
        margin-top: $min-margin;
        display: flex;
        justify-content: space-between;
    }
}

</style>