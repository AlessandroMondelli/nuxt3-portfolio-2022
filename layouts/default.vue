<template>
    <div>
        <div class="content-wrap" :class="{ active: hamburgerStatus.hambStat === true }">
            <slot />
        </div>
        <NavMainNav />
    </div>
</template>

<script setup>
import { useHamburgerStatus } from '@/stores/hamburgerStatus';

const hamburgerStatus = useHamburgerStatus();
</script>

<style scoped lang="scss">
.content-wrap {
    transition: filter $common-transition;

    &.active {
        filter: brightness(0.5);
    }
}
</style>