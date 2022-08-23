<template>
    <div class="hamburger-menu">
        <div class="hamburger-lines" @click="hamburgerClick" :class="{ active: isActive }">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <Transition name="fade-up">
            <NavMobileMenu :menuList="menuList" v-if="isActive" />
        </Transition>
        
    </div>
</template>

<script>
export default {
    props: [ 'menuList' ],
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        hamburgerClick() {
            this.isActive = !this.isActive;
        }
    }
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

    .fade-up-enter-active,
    .fade-up-leave-active {
    transition: all 0.8s ease;
    opacity: 1;
    position: absolute;
    bottom: 4rem;
    }

    .fade-up-enter-from,
    .fade-up-leave-to {
    opacity: 0;
    position: absolute;
    bottom: 8rem;
    }
}
</style>