<template>
    <div class="hamburger-menu">
        <div class="hamburger-lines" @click="hamburgerClick" :class="{ active: isActive }">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <Transition name="fade-down-menu">
            <NavMobileMenu :menuList="menuList" v-if="isActive" @menu-clicked="getMenuClicked" />
        </Transition>
    </div>
</template>

<script>
import { useHamburgerStatus } from '@/stores/hamburgerStatus';

export default {
    setup() {
        const hamburgerStatus = useHamburgerStatus();

        return { hamburgerStatus }
    },
    props: [ 'menuList' ],
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        hamburgerClick() {
            this.isActive = !this.isActive;
            this.hamburgerStatus.changeState;
        },
        getMenuClicked( e ) { //Recupero emits voce di menu cliccata
            if( e )
                this.isActive = false;
        }
    },
    
}
</script>

<style scoped lang="scss">
.hamburger-menu {
    position: relative;

    .hamburger-lines {
        display: block;
        height: 26px;
        width: 32px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
            display: block;
            height: 4px;
            width: 100%;
            border-radius: 10px;
            background-color: $font-color;
            transition: all 0.5s ease;
        }

        &.active .line1 {
            transform: rotate(-50deg);
        }

        &.active .line2 {
            transform: rotate(90deg);
            margin-left: 3px;
        }

        &.active .line3 {
            transform: rotate(50deg);
        }

        &:hover {
            cursor: pointer;
        }
    }

    .fade-down-menu-enter-active,
    .fade-down-menu-leave-active {
        transition: all 0.8s ease;
        opacity: 1;
        position: absolute;
        bottom: $nav-mobile-bottom;
    }

    .fade-down-menu-enter-from,
    .fade-down-menu-leave-to {
        opacity: 0;
        position: absolute;
        bottom: $min-margin + 6rem;
    }
}
</style>