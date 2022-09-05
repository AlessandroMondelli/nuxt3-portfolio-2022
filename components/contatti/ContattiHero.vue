<template>
    <div class="contatti-hero-wrap">
        <p id="hero-content" class="contatti-hero-info"><span id="typing" ref="typing" @click="eraseMessage">{{ message }}</span><span class="writing-cursor">|</span></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageActive: false,
            message: '',
            startMessage: 'Se vuoi, puoi lasciarmi un messaggio.',
            speed: 45,
            i: 0,
        }
    },
    methods: {
        typeMessage() {
            if( this.i < this.startMessage.length ) {
                this.message += this.startMessage.charAt(this.i);
                this.i++;

                setTimeout( this.typeMessage, this.speed );
            }
        },
        eraseMessage() {
            if( this.startMessage.length > 0 ) {
                this.message = this.message.substring( 0, this.i - 1 );
                this.i--

                setTimeout( this.eraseMessage, this.speed );
            }
        }
    }, 
    mounted() {
        this.typeMessage();
    },
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