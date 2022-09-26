<template>
    <div class="skills-list">
        <h2>{{ skillType }}</h2>
            <ul :class="skillType + '-skills'">
                <SkillsListSoft v-if="skillType == 'soft'" />
                <SkillsListHard v-else-if="skillType == 'hard'"/>
            </ul>
    </div>
</template>

<script>
import { useSkillsList } from '@/stores/skillsList';

export default {
    setup() {
        const skillList = useSkillsList(); //recupero dati 

        return { skillList };
    },
    props: [ 'skillType' ],
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .skills-list {
        padding-bottom: $min-margin * 3;
    
        h2 {
            margin-bottom: $min-margin - 0.6rem;
        }

        .hard-skills {
            list-style-type: none;
        }
    }
}

@media screen and (min-width: $tablet) {
    .skills-list {
        width: 200px;
    }
}
</style>