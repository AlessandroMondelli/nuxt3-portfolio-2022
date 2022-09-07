<template>
    <div class="profilo-wrap content-container">
        <div class="container">
            <CommonHeader :title="'profilo'" />
            <ProfiloContent />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .profilo-wrap {
        background-color: $first-color;
        color: $font-color;
    }
}
</style>