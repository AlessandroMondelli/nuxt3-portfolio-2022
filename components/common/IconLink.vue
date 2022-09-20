<template>
    <div class="icon-link">
        <a :href="imgLink" target="__blank">
            <i class="fa-brands" :class="'fa-' + imgName"></i>
        </a>
    </div>
</template>

<script>
export default {
    props: [ 'imgName', 'imgLink' ]
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .icon-link {
        margin: $min-margin + 1rem 0;
        text-align: right;

        i {
            font-size: $hero-span-size;
            transition: filter $common-transition;

            &:hover {
                filter: grayscale(1) invert(1);
            }
        }
    }    
}

@media screen and (min-width: $tablet) {
    .icon-link {
        text-align: left;
    }    
}
</style>