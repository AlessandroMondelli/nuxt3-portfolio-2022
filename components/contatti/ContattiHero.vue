<template>
    <div class="contatti-hero-wrap">
        <p id="hero-content" class="contatti-hero-info"><span id="typing"></span><span class="writing-cursor">|</span></p>
    </div>
</template>

<script>
import { typeWriter } from '@/assets/js/typing.js';

export default {
    data() {
        return {
            cursorStopped: false,
        }
    },
    mounted() {
        var i = 0;
        var txt = 'Se vuoi, lasciami un messaggio.';
        var elId = 'hero-content'
        var speed = 35;
        
        typeWriter( txt, elId, i, speed );
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $tablet) { 
    .contatti-hero-wrap {
        display: flex;
        align-items: center;
        width: 45%;

        .contatti-hero-info {
            font-size: 32px;
        }
    }
}

</style>