<template>
    <div class="single-progetto-wrap">
        <div class="active-project">
            <p class="project-description">
                {{ activeProject[0].description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'activeProject' ]
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {

}
</style>