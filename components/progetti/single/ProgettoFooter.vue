<template>
    <div class="progetto-footer">
        <div class="progetto-github logo-wrap" v-if="activeProject.githubUrl !== ''">
            <a :href="'https://github.com/AlessandroMondelli/' + activeProject.githubUrl" target="__blank"><img class="logo" src="/images/github.png" alt="github logo"></a>
        </div>
        <div class="progetto-site logo-wrap" v-if="activeProject.siteUrl !== ''">
            <a :href="'https://amdev.' + activeProject.siteUrl + '.netlify.app '" target="__blank"><img class="logo" src="/images/website.png" alt="website logo"></a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeProject']
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .progetto-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: $min-margin + 1rem;

        .logo-wrap {

            &:not(:last-child) {
                margin-right: $min-margin;
            }

            .logo {
                width: 30px;
                filter: grayscale(1) invert(1);
                transition: filter $common-transition;

                &:hover {
                    filter: none;
                }
            }
        }
    }
}
    
</style>