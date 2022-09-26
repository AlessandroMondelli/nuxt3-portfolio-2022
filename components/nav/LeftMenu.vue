<template>
  <div class="left-nav">
    <NuxtLink to="/" :class="{ active: route !== 'index' && route !== '' }" @click="route = 'index'; this.routeFunc.currentRoute = 'index'; hamburgerStatus.hambStat === true ? hamburgerStatus.changeState() : '' ">amdev</NuxtLink>
  </div>
</template>

<script>
import { useRouteFunc } from '@/stores/routeFunc';
import { useHamburgerStatus } from '@/stores/hamburgerStatus';

export default {
  setup() {
    const routeFunc = useRouteFunc();
    const hamburgerStatus = useHamburgerStatus();

    return { routeFunc, hamburgerStatus }
  },
  data() {
    return {
      route: '',
    }
  }, 
  mounted() {
    let route = this.$route.name;

    if( this.routeFunc.currentRoute === 'index' ) { //Controllo se pagina precedente era home
      setTimeout(() => { //Inserisco un timeout
        this.$data.route = route;
      }, 2000)
    } else {
      this.$data.route = route; //Altrimenti salvo subito la route
    }

    this.routeFunc.currentRoute = route; //Salvo route corrente
  }
}
</script>

<style scoped lang="scss">
  @media screen and (min-width: $mobile) {
    .left-nav {
      a {
        position: relative;
        top: $title-animation-active-start-pos;
        opacity: 0;
        transition: all $common-transition;
         
        &.active {
          top: 0;
          opacity: 1;
        }

        &::before, &::after {
          color: $first-color;
          opacity: 0;
          transition: all $common-transition;
        }

        &:hover::before, &:hover::after {
          opacity: 1;
        }

        &::before {
          content: '<';
          position: relative;
          right: $title-animation-el-start-pos;
        }

        &::after {
          content: '/>';
          position: relative;
          left: $title-animation-el-start-pos;
        }

        &:hover::before {
          right: $title-animation-el-final-pos;
        }

        &:hover::after {
          left: $title-animation-el-final-pos;
        }
      }
    }
  }
</style>