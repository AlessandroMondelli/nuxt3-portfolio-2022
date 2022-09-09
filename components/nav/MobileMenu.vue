<template>
    <div class="mobile-menu-wrap">
        <ul class="mobile-menu">
            <li class="mobile-menu-le" v-for="menuEl in menuList" :key="menuEl"><NuxtLink :to="menuEl">{{ menuEl }}</NuxtLink></li>
        </ul>
    </div> 
</template>

<script>
export default {
    props: [ 'menuList' ],
}
</script>

<style scoped lang="scss">
.mobile-menu-wrap {
    position: absolute;
    bottom: $min-margin + 2.5rem;
    right: $min-margin - 1.5rem;

    .mobile-menu {
        list-style-type: none;
        text-align: right;

        li:not(:last-child) {
            margin-bottom: $min-margin - 0.5rem;
        }
    }
}
</style>