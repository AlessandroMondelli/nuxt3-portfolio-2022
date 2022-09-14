<template>
    <div class="progetti-wrap">
        <ProgettiLang :activeProject="activeProject" @return-value="getLang" />
        <Transition name="fade-left">
            <ProgettiList v-if="singleProjectClosed === true" :key="clickedLang" :projects="projectsArray" @return-project="getProject" />
        </Transition>
        <Transition name="fade-left">
            <ProgettiSingleProgetto v-if="activeProject" :activeProject="activeProject.content" @closeProj="closeProj" />
        </Transition>
    </div>
</template>

<script>
import { useProjectsList } from '@/stores/projectsList';

export default {
    setup() {
        const projectsData = useProjectsList();

        return { projectsData };
    },
    data() {
        return {
            projectsArray: '',
            activeProject: false,
            singleProjectClosed: true,
            projectLang: undefined,
            clickedLang: 0,
        }
    },
    methods: {
        getLang( e ) {
            for( var i = 0; i < this.projectsData.projects.length; i++ ) {
                if( this.projectsData.projects[i].projectLang == e ) {
                    this.projectsArray = this.projectsData.projects[i].projectsList;
                    this.clickedLang++;
                }
            }
        },
        getProject( e ) {
            this.singleProjectClosed = false;
            setTimeout( () => {
                this.activeProject = e;
            }, 500 );
        },
        closeProj() {
            this.activeProject = false;
            setTimeout( () => {
                this.singleProjectClosed = true;
            }, 500 ) 
        } 
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) {
    .progetti-wrap {
        display: flex;
        flex-direction: row;
    }
}

@media screen and (min-width: $laptop) {
    .progetti-wrap {
        margin-top: $min-margin + 8rem;
    }
}
</style>