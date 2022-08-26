<template>
  <div class="progetti-lang-wrap">
        <ul class="progetti-langs" >
            <li class="progetti-lang el-link" v-for="(projectData, index) in projects" :key="index" @click="returnValue(projectData.projectLang, index)" :class="{ 'active': activeLang == index }">{{ projectData.projectLang }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [ 'projects' ],
    data() {
        return {
            activeLang: '',
        }
    },
    methods: {
        returnValue( lang, ind ) {
            this.activeLang = ind; //Indice per aggiungere stile a valore cliccato

            this.$emit( 'return-value', lang );
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) { 
    .progetti-langs {
        list-style-type: none;
        margin-bottom: ($min-margin + 2rem);

        .progetti-lang {
            display: inline-block;
            font-size: $progetti-langs-size-sm;
            
            &:not(:last-child) {
                margin-right: ( $min-margin - 0.5rem );
            }
        }
    }
}

@media screen and (min-width: $tablet) { 
    .progetti-lang-wrap {
        width: 50%;
        .progetti-langs { 
            .progetti-lang {
                display: block;
                margin-bottom: $min-margin;
                font-size: $progetti-langs-size-md;
                position: relative;
                width: 70%;

                &:after {
                    content: '>';
                    opacity: 0;
                    width: 20px;
                    transition: all 0.5s ease;
                    position: absolute;
                    right: 25px;
                }

                &:hover:after {
                    opacity: 1;
                    right: 0;
                }

                &.active:after {
                    opacity: 1;
                    right: 0;
                }
            }
        }
    }

}


</style>