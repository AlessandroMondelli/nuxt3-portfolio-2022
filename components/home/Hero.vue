<template>
    <div class="hero-wrap content-container">
        <div class="container main-content">
            <HomeLeftHero />
            <HomeRightHero />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.hero-wrap {
    background-color: $first-color;
    color: $font-color;

    .main-content {
        height: inherit;
    }
}
</style>