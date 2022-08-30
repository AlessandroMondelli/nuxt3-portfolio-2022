<template>
    <div class="progetti-list-wrap">
        <ul class="progetti-list">
            <li class="progetti-list-el progetti-lang el-link" v-for="project in projectsArray" :key="project" @click="returnValue(project)">{{ project.projectTitle }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'langUrl', 'projectsArray' ],
    methods: {
        returnValue( project ) {
            this.$emit( 'return-project', project );
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .progetti-list {
        list-style-type: none;
        
        .progetti-list-el {
            margin-bottom: ($min-margin - 1rem);
        }
    }
}

</style>