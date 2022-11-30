<template>
    <div class="hero-content all-height-content">
        <p :class="{loaded: loaded}">il tuo amichevole <span class="glow">web developer</span> di quartiere</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loaded: false,
        }
    },
    created() {
        setTimeout(() => {
            this.loaded = true;
        }, 1500)
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .hero-content {
        justify-content: flex-end;

        p {
            position: relative;
            top: $min-margin;
            opacity: 0;
            font-size: $hero-p-size;
            transition: all 0.8s ease;

            &.loaded {
                top: 0;
                opacity: 1;
            }

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