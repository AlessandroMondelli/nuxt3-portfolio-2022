<template>
  <div class="right-nav">
        <NavLargeMenu v-if="currentWidth >= 768" :menuList="menuList" />
        <NavHamburger v-else :menuList="menuList" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentWidth: 0,
            menuList: [ 'profilo', 'skills', 'progetti', 'contatti' ]
        }
    },
    mounted() {
        if( process.client ) {
            this.currentWidth = window.innerWidth;
        }

        window.onresize = () => {
            this.currentWidth = window.innerWidth;
        }
    }
}
</script>