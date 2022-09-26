<template>
    <div class="nav-wrap">
        <nav class="main-nav nav-container">
            <NavLeftMenu />
            <NavRightMenu />
        </nav>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/scss/partials/mixins.scss';

@media screen and (min-width: $mobile) {
    .nav-wrap {
        background-color: $second-color;
        color: $font-color;
        width: $nav-mobile-width;
        margin: 0 auto;
        position: sticky;
        bottom: 15px;
        left: 0;
        right: 0;
        border-radius: $max-radius;
        @include glass( rgba( 0, 255, 171, 0.30), 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ), 7px, 1px solid rgba( 255, 255, 255, 0.18 ) );

        .main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            height: $nav-height-sm;
        }
    }
}

@media screen and (min-width: $tablet) {
    .nav-wrap {
        width: 100%;
        z-index: 9;
        bottom: 0;

        .main-nav {
            height: $nav-height-md;
        }
    }
}

@media screen and (min-width: $laptop) {
    .nav-wrap {
        border-radius: 0;
        .main-nav {
            height: $nav-height-lg;
        }
    }
}
</style>