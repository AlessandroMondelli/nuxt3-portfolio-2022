<template>
    <div class="skills-list">
        <h2>{{ skillType }}</h2>
            <ul v-if="skillType == 'soft'" :class="skillType + '-skills'">
                <li :class="skillType + '-skill'" v-for="skill in skillsList" :key="skill">
                    {{ skill }}
                </li>
            </ul>
            <ul v-if="skillType == 'hard'" :class="skillType + '-skills'">
                <li :class="skillType + '-skill'" v-for="skill in skillsList" :key="skill.lang">
                    <p><img :src="'/assets/images/skills/' + skill.icon + '.png'" :alt="'icona ' + skill.lang"> {{ skill.lang }}</p>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props: [ 'skillType', 'skillsList' ]
}
</script>

<style scoped lang="scss">
.skills-list {
    width: 200px;

    h2 {
        margin-bottom: 1.4rem;
    }

    .hard-skills {
        list-style-type: none;

        .hard-skill {
            margin-bottom: 0.2rem;

            img {
                width: $skills-imgs-size;
                margin-right: 0.5rem;
                vertical-align: middle;
                filter: grayscale(1) invert(1);
            }
        }
    }
}

@media screen and (min-width: $mobile) {
    .skills-list {
        margin: 3rem 0;
    }
}

@media screen and (min-width: $tablet) {
    .skills-list {
        margin: 0;
    }
}
</style>