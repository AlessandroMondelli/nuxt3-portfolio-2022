<template>
    <div class="skill-img-wrap" :class="skillChoose">
        <div class="float-img">
            <img src="/images/light-bulb-white-l.png" alt="light bulb soft skills" @click="returnValue('soft')" class="soft-skills-img" :class="{ 'active' : skillChoose == 'soft' }">
            <div class="arrow" :class="{ active: skillChoose != '' }">
                <img class="img-arrow" src="/images/handwritten_arrow.png" alt="freccia disegnata a mano" />
                <p class="text-arrow">Clicca la lampadina per scoprire le skills</p>
            </div>
        </div>
        <div class="float-img">
            <img src="/images/light-bulb-white-r.png" alt="light bulb hard skills" @click="returnValue('hard')" class="hard-skills-img" :class="{ 'active' : skillChoose == 'hard' }">  
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skillChoose: '',
        }
    },
    methods: {
        returnValue( skillChooseState ) { 
            if( this.skillChoose == '' || skillChooseState != this.skillChoose ) {
                this.skillChoose = skillChooseState;
                this.$emit( 'return-value', skillChooseState );

                gtag('event', 'click_skill');
            }
        },
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .skill-img-wrap {
        position: relative;
        transition: all $common-transition;
        margin: 2rem auto;
        display: flex;
        justify-content: center;

        &::after {
            content: '';
            opacity: 0;
            position: absolute;
            top: $skills-bulb-light-top;
            left: $skills-bulb-light-left;
            transition: all $common-transition;
        }

        &.soft::after, &.hard::after { 
            content: '';
            position: absolute;
            opacity: 1;
        }

        &.soft::after {
            box-shadow:
                0 0 60px 20px #fff,
                0 0 100px 50px $skills-img-soft-color, 
        }

        &.hard::after {
            box-shadow:
                0 0 60px 20px #fff,
                0 0 100px 50px $skills-img-hard-color, 
        }

        .float-img {
            float: left;
            width: $skills-bulbs-float-width-sm;

            img {
                width: $skills-bulbs-width;
                transition: all 0.5s ease;

                &:hover {
                    cursor: pointer;
                }

                &.active {
                    width: $skills-bulbs-width + 10px;
                }
            }

            .arrow.active {
            
                & .img-arrow {
                    transition: all 0.8s ease;
                    transform: rotate( 150deg );
                    margin-top: $min-margin + 1rem;
                }

                & .text-arrow {
                    transition: opacity 0.2s;
                    opacity: 0;
                    position: absolute;
                }
            }
        }
    }
}

@media screen and (min-width: $tablet) {
    .skill-img-wrap {
        margin: $min-margin 0 0 0;
        width: 45%;

        &::after {
            top: $skills-bulb-light-top;
            left: $skills-bulb-light-left;
        }

        .float-img {
            width: $skills-bulbs-float-width-md;

            .arrow.active {
                transition: transform $common-transition;
                
                & .img-arrow {
                    transform: none;
                }

                & .text-arrow {
                    opacity: 1;
                    position: relative;
                }
            }
        }
    }
}

@media screen and (min-width: $laptop) {
    .skill-img-wrap {
        margin: $min-margin 0 0 0;
        width: 20%;

        .arrow {
            position: relative;

            p {
                position: absolute;
                right: 150%;
            }

            img {
                position: absolute;
                right: 75%;
                bottom: 100%;
            }
        }
    }
}
</style>