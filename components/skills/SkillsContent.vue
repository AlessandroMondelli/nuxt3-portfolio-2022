<template>
    <div class="section-content">
        <div class="skill-list-wrap">
            <SkillsImg @return-value="getSkillTypeChoose" />
            <div class="skill-list-fix"> 
                <Transition name="fade-left">
                    <SkillsList :key="skillChange" :skillType="skillChoose" :skillsList="skillChoose =='soft' ? softSkills : hardSkills" />
                </Transition>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillChoose: '',
            skillChange: false, 
            softSkills: [ 'Problem Solving', 'Capacità di lavorare in autonomia e in Team' ,'Propenso alla formazione continua', 'Schedule delle task assegnate'],
            hardSkills: [ 
                {
                  lang: 'HTML',
                  icon: 'html5'
                },
                {
                  lang: 'CSS',
                  icon: 'css'
                },
                {
                  lang: 'SCSS',
                  icon: 'sass'
                },
                {
                  lang: 'JavaScript',
                  icon: 'javascript'
                },
                {
                  lang: 'JQuery',
                  icon: 'jquery'
                },
                {
                  lang: 'Vue.js',
                  icon: 'vue'
                },
                {
                  lang: 'Nuxt.js',
                  icon: 'nuxt'
                },
                {
                  lang: 'PHP',
                  icon: 'php'
                },
                {
                  lang: 'MySQL',
                  icon: 'mysql'
                },
                {
                  lang: 'Laravel',
                  icon: 'laravel'
                },
                {
                  lang: 'Wordpress',
                  icon: 'wordpress'
                },
            ]
        }
    },
    methods: {
        getSkillTypeChoose(e) {
            this.skillChoose = e;
            this.skillChange = !this.skillChange;
        }
    }
}
</script>

<style scoped lang="scss">
.section-content {

    .skill-list-wrap {
        display: flex;
        justify-content: space-around;
        position: relative;
    }
}

.fade-left-enter-active, .fade-left-leave-active {
    transition: all 0.8s ease;
    transition-delay: 0.7s;
    opacity: 1;
    position: relative;
    left: 0;
}

.fade-left-enter-from, .fade-left-leave-to {
    transition: all 0.6s ease;
    opacity: 0;
    position: relative;
    left: 10%;
}

@media screen and (min-width: $mobile) {
    .skill-list-wrap {
        flex-direction: column;
        padding: 2rem;
    }
}

@media screen and (min-width: $tablet) {
    .section-content {
        margin-top: 5rem;
        .skill-list-wrap {
                flex-direction: row;
                margin-top: 0;
            }
    }
}
</style>