<template>
    <div class="profilo-wrap content-container">
        <div class="container main-content">
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
.profilo-wrap {
    background-color: $first-color;
    color: $font-color;
}
</style>