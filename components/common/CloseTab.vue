<template>
    <div class="close-project">
        <img src="/images/close.png" alt="X per chiudere elemento">
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .close-project {
        img {
            width: 20px;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>