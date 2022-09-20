<template>
  <div class="progetti-lang-wrap">
        <ul class="progetti-langs">
            <li class="progetti-lang el-link" v-for="(projectData, index) in projectsArray.projects" :key="index" @click="returnValue(projectData.projectLang, index)" :class="{ 'active': activeLang === index, 'project-active': activeProject !== false, 'not-active': activeProject !== false && activeLang !== index }">{{ projectData.projectLang }}</li>
        </ul>
        <CommonIconLink :imgName="'github'" :imgLink="'https://github.com/AlessandroMondelli'" />
    </div>
</template>

<script>
import { useProjectsList } from '@/stores/projectsList';

export default {
    setup() {
        const projectsArray = useProjectsList();

        return { projectsArray };
    },
    props: [ 'activeProject' ],
    data() {
        return {
            activeLang: '',
        }
    },
    methods: {
        returnValue( lang, ind ) {
            this.activeLang = ind; //Indice per aggiungere stile a valore cliccato

            this.$emit( 'return-value', lang );
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) { 
    .progetti-lang-wrap {
        display: flex;
        flex-direction: column;

        .progetti-langs {
            list-style-type: none;

            .progetti-lang {
                display: inline-block;
                font-size: $progetti-langs-size-sm;

                &.project-active {
                    pointer-events: none;
                }

                &.not-active {
                    color: $font-not-active;
                }
                
                &:not(:last-child) {
                    margin-right: ( $min-margin - 0.5rem );
                }
            }
        }
    }
}

@media screen and (min-width: $tablet) { 
    .progetti-lang-wrap {
        width: 50%;
        display: block;

        .progetti-langs { 
            .progetti-lang {
                display: block;
                margin-bottom: $min-margin;
                font-size: $progetti-langs-size-md;
                position: relative;
                width: 12rem;

                &:after {
                    content: '>';
                    opacity: 0;
                    width: 20px;
                    transition: all 0.5s ease;
                    position: absolute;
                    right: 25px;
                }

                &:hover:after {
                    opacity: 1;
                    right: 0;
                }

                &.active:after {
                    opacity: 1;
                    right: 0;
                }
            }
        }
    }
}

@media screen and (min-width: $laptop) { 
    .progetti-lang-wrap {
        width: 35%;
    }
}
</style>