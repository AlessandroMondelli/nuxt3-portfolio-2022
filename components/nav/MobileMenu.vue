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
    bottom: 4.5rem;
    right: 0.5rem;

    .mobile-menu {
        list-style-type: none;
        text-align: right;

        li:not(:last-child) {
            margin-bottom: 1.5rem;
        }
    }
}
</style>