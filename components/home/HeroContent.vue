<template>
    <div class="hero-content all-height-content">
        <p>il tuo amichevole <span class="glow">web developer</span> di quartiere</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.hero-content {
    justify-content: flex-end;

    p {
        font-size: $hero-p-size;

        span {
            color: $second-color;
            font-size: $hero-span-size;
        }
    }
}
</style>