<template>
    <div class="profilo-info">
        <div class="profilo-content">
            <ProfiloLeft />
            <div class="divider" :class="{ active: dividerActive }"></div>
            <ProfiloRight />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dividerActive: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.$data.dividerActive = true;
        }, 2500)
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .profilo-content {
        display: flex;
        justify-content: space-between;

        .divider {
            width: 2px;
            height: 0;
            margin: auto 0;
            background-color: $font-color;
            border-radius: $max-radius;
            transition: height 1s ease;

            &.active {
                height: 15rem;
            }
        }
    }   
}
</style>