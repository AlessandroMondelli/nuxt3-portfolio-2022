<template>
    <div class="left-hero section-side">
        <p>il tuo amichevole <span>web developer</span> di quartiere</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.left-hero {
    justify-content: flex-end;

    p {
        font-size: $hero-p-size;
        margin-bottom: 2rem;

        span {
            color: $second-color;
            font-size: $hero-span-size;
        }
    }
}
</style>