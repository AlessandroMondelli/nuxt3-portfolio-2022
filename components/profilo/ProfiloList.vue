<template>
    <div class="profilo-list">
        <h2>{{ profiloData.title }}</h2>
        <div class="list-wrap">
            <div class="single-el-wrap" v-for="exp in profiloData.exp" :key="exp">
                <div class="el-logo">
                    <a :href="exp.website" target="__blank"><img :src="'/images/profilo/' + exp.logo" :alt="'logo' + exp.azienda"></a>
                </div>
                <div class="el-data">
                    <h3>{{ exp.azienda }}</h3>
                    <p>{{ exp.posizione }}</p>
                    <p v-if="exp.durata != ''">{{ exp.durata }}</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    props: [ 'profiloData' ]
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .profilo-list {
        margin-bottom: $min-margin + 2rem;

        h2 {
            margin: $min-margin 0 $min-margin - 1rem 0;
            font-size: $h2-size;
        }

        .list-wrap {
            
            .el-logo {
                transition: transform $common-transition;

                img {
                    max-width: 100px;
                    margin: $min-margin - 1rem 0;
                }

                &:hover {
                    transform: scale(0.95);
                }
            }

            .el-data {
                h3 {
                    margin-bottom: $min-margin - 1.4rem;
                    font-weight: $profilo-h3-weight;
                }

                margin-left: $min-margin - 0.5rem 0;
                margin-bottom: $min-margin;
                font-size: $profilo-list-size;
            }
        }
    }   
}

@media screen and (min-width: $laptop) {
    .single-el-wrap {
        display: flex; 
        align-items: center;
        margin-top: $min-margin + 1rem;

        .el-logo {
            margin-right: $min-margin + 4rem;
        }
    }
}
</style>