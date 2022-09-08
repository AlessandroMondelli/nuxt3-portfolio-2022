<template>
    <div class="skill-img-wrap" :class="softChoose">
        <div class="float-img">
            <img src="@/assets/images/light-bulb-white-l.png" alt="light bulb soft skills" @click="returnValue('soft')" class="soft-skills-img" :class="{ 'active' : softChoose == 'soft' }">
            <div class="arrow">
                
                <img class="img-arrow" src="@/assets/images/handwritten_arrow.png" alt="freccia disegnata a mano" />
                <p>Clicca la lampadina per scoprire le skills</p>
            </div>
        </div>
        <div class="float-img magnet-el">
            <img src="@/assets/images/light-bulb-white-r.png" alt="light bulb hard skills" @click="returnValue('hard')" class="hard-skills-img" :class="{ 'active' : softChoose == 'hard' }">   
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            softChoose: '',
        }
    },
    methods: {
        returnValue( softChooseState ) {
            if( this.softChoose == '' || softChooseState != this.softChoose ) {
                this.softChoose = softChooseState;
                this.$emit( 'return-value', softChooseState );
            }
        },
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .skill-img-wrap {
        position: relative;
        transition: all 0.3s ease;
        margin: 2rem auto;

        &::after {
            content: '';
            opacity: 0;
            position: absolute;
            top: $skills-bulb-light-top;
            left: $skills-bulb-light-left;
            transition: all 0.3s ease;
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
        }
    }
}

@media screen and (min-width: $laptop) {
    .skill-img-wrap {
        margin: $min-margin 0 0 0;
        width: 25%;

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