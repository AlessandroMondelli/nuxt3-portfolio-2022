<template>
    <div class="all-height-content">
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
            softSkills: [ 'Problem Solving', 'Capacità di adattamento', 'Propenso al lavoro di squadra', 'Propenso alla formazione continua', 'Gestione organizzata delle task', 'Puntualità' ],
            hardSkills: [ 
                {
                  lang: 'HTML',
                  icon: 'html5',
                  perc: '80',
                },
                {
                  lang: 'CSS',
                  icon: 'css',
                  perc: '75',
                },
                {
                  lang: 'SCSS',
                  icon: 'sass',
                  perc: '70',
                },
                {
                  lang: 'JavaScript',
                  icon: 'javascript',
                  perc: '75',
                },
                {
                  lang: 'JQuery',
                  icon: 'jquery',
                  perc: '70',
                },
                {
                  lang: 'Vue.js',
                  icon: 'vue',
                  perc: '70',
                },
                {
                  lang: 'Nuxt.js',
                  icon: 'nuxt',
                  perc: '65',
                },
                {
                  lang: 'PHP',
                  icon: 'php',
                  perc: '70',
                },
                {
                  lang: 'MySQL',
                  icon: 'mysql',
                  perc: '65',
                },
                {
                  lang: 'Laravel',
                  icon: 'laravel',
                  perc: '60',
                },
                {
                  lang: 'Wordpress',
                  icon: 'wordpress',
                  perc: '75',
                },
                {
                  lang: 'Google Apps Script',
                  icon: 'apps_script',
                  perc: '70',
                },
                {
                  lang: 'GIT Versioning',
                  icon: 'git',
                  perc: '80',
                }
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
@media screen and (min-width: $mobile) {
  .all-height-content {
    .skill-list-wrap {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      padding: $min-margin;
    }
  }
}

@media screen and (min-width: $tablet) {
  .all-height-content {
    margin-top: $mid-margin;
    .skill-list-wrap {
      flex-direction: row;
      margin-top: 0;
    }
  }
}
</style>