<template>
    <div class="nav-wrap">
        <nav class="main-nav container">
            <NavLeftMenu />
            <NavRightMenu />
        </nav>
    </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .nav-wrap {
        background-color: $second-color;
        color: $font-color;

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
        .main-nav {
            height: $nav-height-md;
        }
    }
}

@media screen and (min-width: $laptop) {
    .nav-wrap {
        .main-nav {
                height: $nav-height-lg;
        }
    }
}
</style>