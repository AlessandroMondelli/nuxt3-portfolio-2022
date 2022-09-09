<template>
    <div class="large-menu">
        <ul class="main-menu">
            <li class="menu-item" v-for="menuItem in menuList" :key="menuItem"><NuxtLink :to="menuItem">{{ menuItem }}</NuxtLink></li>
        </ul>       
    </div>
</template>

<script>
export default {
    props:[ 'menuList' ]
}
</script>

<style scoped lang="scss">
.main-menu {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li:not(:last-child) {
        margin-right: $min-margin;
    }
}
</style>