<template>
    <div class="all-height-content">
        <div class="skill-list-wrap">
            <SkillsImg @return-value="getSkillTypeChoose" />
            <div class="skill-list-fix"> 
                <Transition name="fade-left">
                    <SkillsList :key="skillChange" :skillType="skillChoose" />
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