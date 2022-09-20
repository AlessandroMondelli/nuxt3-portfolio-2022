<template>
    <li class="hard-skill" v-for="(skill, index) in skillList.hardSkills" :key="index" @mouseenter="hardOver = index" @mouseleave="hardOver = undefined"> 
        <p class="skill-perc" :class="{ active: hardOver == index}" :style="[ hardOver == index ? { width: skill.perc + '%' } : { width: 0 + 'px' } ] ">{{ skill.perc }}</p>
        <p><img :src="'/assets/images/skills/' + skill.icon + '.png'" :alt="'icona ' + skill.lang"> {{ skill.lang }}</p>
    </li>
</template>

<script>
import { useSkillsList } from '@/stores/skillsList';

export default {
    setup() {
        const skillList = useSkillsList(); //recupero dati 

        return { skillList };
    },
    data() {
        return {
            hardOver: undefined,
        }
    },
}
</script>

<style scoped lang="scss">

@media screen and (min-width: $mobile) {
    .hard-skill {
    margin-bottom: 1rem;
    position: relative;

        &:hover {
            cursor: default;
        }

        .skill-perc {
            position: absolute;
            top: -120%;
            background-color: #FFF;
            color: #000;
            border-radius: $max-radius;
            font-size: $small-font-size;
            padding: 2px 4px;
            width: 0;
            transition: width 0.5s ease;
            opacity: 0;

            &.active {
                opacity: 1;
            }
        }

        img {
            width: $skills-imgs-size;
            margin-right: $min-margin - 1.5rem;
            vertical-align: middle;
            filter: grayscale(1) invert(1);
        }
    }    
}
</style>