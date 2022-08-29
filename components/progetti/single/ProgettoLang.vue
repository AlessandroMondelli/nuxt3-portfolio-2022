<template>
    <div class="tech-wrap">
        <div class="tech-logo" v-for="technology in activeProject.tech" :key="technology"> 
            <img :src="'/assets/images/skills/' + technology + '.png'" />
        </div>
    </div>  
</template>

<script>
export default {
    props: ['activeProject'],
    methods: {
        closeProj() {

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

        .tech-logo {

            &:not(:last-child) {
                margin-right: $min-margin - 1rem;
            }
            
            img {
                filter: grayscale(1) invert(1);
            }
        }
    }
}
</style>