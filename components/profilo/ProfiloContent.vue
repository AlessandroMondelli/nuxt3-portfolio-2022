<template>
    <div class="profilo-info">
        <div class="profilo-content">
            <ProfiloLeft />
            <div class="divider"></div>
            <ProfiloRight />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .profilo-content {
        display: flex;
        justify-content: space-between;

        .divider {
            height: 15rem;
            margin: auto 0;
            width: 2px;
            background-color: #FFF;
            border-radius: 25px;
        }
    }   
}
</style>