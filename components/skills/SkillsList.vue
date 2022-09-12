<template>
    <div class="skills-list">
        <h2>{{ skillType }}</h2>
            <ul v-if="skillType == 'soft'" :class="skillType + '-skills'">
                <li :class="skillType + '-skill'" v-for="skill in skillsList" :key="skill">
                    {{ skill }}
                </li>
            </ul>
            <ul v-if="skillType == 'hard'" :class="skillType + '-skills'">
                <li :class="skillType + '-skill'" v-for="(skill, index) in skillsList" :key="index" @mouseenter="hardOver = index" @mouseleave="hardOver = undefined"> 
                    <p class="skill-perc" :class="{ active: hardOver == index}" :style="[ hardOver == index ? { width: skill.perc + '%' } : { width: 0 + 'px' } ] ">{{ skill.perc }}</p>
                    <p><img :src="'/assets/images/skills/' + skill.icon + '.png'" :alt="'icona ' + skill.lang"> {{ skill.lang }}</p>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props: [ 'skillType', 'skillsList' ],
    data() {
        return {
            hardOver: undefined,
        }
    }
}
</script>

<style scoped lang="scss">
.skills-list {
    width: 200px;

    h2 {
        margin-bottom: $min-margin - 0.6rem;
    }

    .hard-skills {
        list-style-type: none;

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
}

@media screen and (min-width: $mobile) {
    .skills-list {
        margin: 3rem 0;
        
        li:not(:last-child) {
            margin-bottom: $min-margin - 1rem;
        }
    }
}

@media screen and (min-width: $tablet) {
    .skills-list {
        margin: 0;
    }
}
</style>