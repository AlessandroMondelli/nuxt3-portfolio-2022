<template>
    <div class="progetti-list-wrap">
        <ul class="progetti-list">
            <li class="progetti-list-el progetti-lang el-link" v-for="project in projects" :key="project" @click="returnValue(project)">{{ project.projectTitle }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'projects' ],
    methods: {
        returnValue( project ) {
            this.$emit( 'return-project', project );
            gtag('event', 'click_project');
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .progetti-list {
        list-style-type: none;
        margin-top: $min-margin;
        
        .progetti-list-el {
            margin-bottom: ($min-margin - 1rem);
        }
    }
}

@media screen and (min-width: $tablet) {
    .progetti-list {
        margin-top: 0;
    }
}

</style>