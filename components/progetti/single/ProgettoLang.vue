<template>
    <div class="tech-wrap">
        <div class="tech-logo" v-for="(technology, index) in activeProject.tech" :key="index" @mouseenter="techInd = index" @mouseleave="techInd = undefined"> 
            <span class="tech-tooltip" :class="{ active: techInd === index }">{{ technology }}</span>
            <img :src="'/images/skills/' + technology + '.png'">
        </div>
    </div>  
</template>

<script>
export default {
    props: ['activeProject'],
    data() {
        return {
            techInd: undefined,
        }
    }   
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .tech-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .tech-logo {
            position: relative;

            &:not(:last-child) {
                margin-right: $min-margin - 1rem;
            }

            .tech-tooltip {
                position: absolute;
                left: 50%;
                bottom: 120%;
                transform: translateX(-50%);
                font-size: 12px;
                opacity: 0;
                transition: all $common-transition;

                &.active {
                    opacity: 1;
                    bottom: 130%
                }
            }
            
            img {
                width: 30px;
                filter: grayscale(1) invert(1);
            }
        }
    }
}

@media screen and (min-width: $tablet) {
    .tech-wrap {
        .tech-logo {

            img {
                width: 40px;
            }
        }
    }
}
</style>