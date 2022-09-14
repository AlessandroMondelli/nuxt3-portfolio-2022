<template>
    <li class="soft-skill" v-for="skill in skillList.softSkills" :key="skill">
        {{ skill }}
    </li>
</template>

<script>
import { useSkillsList } from '@/stores/skillsList';

export default {
    setup() {
        const skillList = useSkillsList(); //recupero dati 

        return { skillList };
    }
}
</script>

<style scoped lang="scss">
.soft-skill:not(:last-child) {
    margin-bottom: $min-margin - 1rem;
}
</style>