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
@media screen and (min-width: $mobile) {
    .hero-content {
        justify-content: flex-end;

        p {
            font-size: $hero-p-size;

            .glow {
                color: $second-color;
                font-size: $hero-span-size;
                display: block;
            }
        }
    }   
}

@media screen and (min-width: $tablet) {
    .hero-content {
        p {
            .glow {
                display: inline;
            }
        }
    }
}

</style>