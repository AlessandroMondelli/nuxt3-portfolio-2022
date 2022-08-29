<template>
    <div class="progetto-description-wrap">
        <p class="project-description">
            {{ activeProject.description }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['activeProject']
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .project-description {
        margin: $min-margin 0;
    } 
}
</style>