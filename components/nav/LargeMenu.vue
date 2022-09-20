<template>
    <div class="large-menu">
        <ul class="main-menu">
            <li class="menu-item" v-for="menuItem in menuList" :key="menuItem">
                <NuxtLink :to="menuItem">{{ menuItem }}</NuxtLink>
            </li>
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

    li {
        border-bottom: 0;

        &:not(:last-child) {
            margin-right: $min-margin;
        }

        &.active {
            border-bottom: 2px solid $font-color;
        }

        a {
            position: relative;

            &::after {
                content: '';
                width: 0;
                transition: all $common-transition;
            }

            &:hover:after {
                content: '';
                position: absolute;
                bottom: -10%;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $font-color;
            }

            &.router-link-active {
                border-bottom: 2px solid $font-color;
            }
        }
    }
}
</style>