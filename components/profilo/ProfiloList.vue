<template>
    <div class="profilo-list">
        <h2>{{ profiloData.title }}</h2>
        <div class="list-wrap">
            <div class="single-el-wrap" v-for="exp in profiloData.exp" :key="exp">
                <div class="el-logo">
                    <img :src="'assets/images/profilo/' + exp.logo" :alt="'logo' + exp.azienda" >
                </div>
                <div class="el-data">
                    <h3>{{ exp.azienda }}</h3>
                    <p>{{ exp.posizione }}</p>
                    <p>{{ exp.durata }}</p>
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
.profilo-list {
    margin-bottom: $min-margin + 2rem;

    h2 {
        margin: $min-margin 0 $min-margin - 1rem 0;
        font-size: 24px;
    }

    .list-wrap {
        .el-logo {
            img {
                max-width: 100px;
                margin: $min-margin - 1rem 0;
            }
        }

        .el-data {
            h3 {
                margin-bottom: $min-margin - 1.4rem;
            }

            margin-left: $min-margin - 0.5rem 0;
            font-size: 14px;
        }
    }
}
</style>