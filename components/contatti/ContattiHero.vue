<template>
    <div class="contatti-hero-wrap">
        <p id="hero-content" class="contatti-hero-info">
            <span id="typing" ref="typing">{{ message }}</span>
            <span class="writing-cursor">|</span>
        </p>
    </div>
</template>

<script>
export default {
    props: [ 'formSent' ],
    data() {
        return {
            messageActive: false,
            message: '',
            startMessage: 'Per domande o collaborazioni, non esitare a lasciarmi un messaggio.',
            thankYouMessage: 'Grazie per avermi contattato.',
            thanksOutput: false,
            speed: 50,
            i: 0,
        }
    },
    methods: {
        typeMessage( messageString ) { //Funzione per scrivere frase
            if( this.i < messageString.length ) { //Se il contatore è minore della lunghezza del messaggio
                this.message += messageString.charAt(this.i); //Aggiungo a variabile lettera del messaggio
                this.i++; //Incremento contatore

                if( this.i == ( messageString.length - 1) ) //Se è l'ultima lettera
                    this.messageActive = true; //Setto status completamento messaggio a true

                setTimeout( this.typeMessage, this.speed, messageString ); //Richiamo funzione per prossima lettera dopo tempo definito
            }
        },
        eraseMessage( messageString ) { //Funzione per eliminare frase
            if( this.i > 0 && this.messageActive == true ) { //Se il contatore è maggiore di 0 e lo status del messaggio completato è true
                this.message = messageString.substring( 0, this.i - 1 ); //Tolgo a messaggio lettera in posizione i - 1
                this.i-- //Decremento contatore

                if( this.i == 0 ) //Se il contatore è a 0
                    this.messageActive = false; //Setto status completamento messaggio a false

                setTimeout( this.eraseMessage, this.speed, messageString ); //Richiamo funzione per lettera predecente
            }
        }
    }, 
    watch: {
        formSent: function( val ) { //All'invio del form
            if( val == true ) {
                this.eraseMessage( this.message ); //Elimino messaggio presente
            }
        },
        messageActive: function( val ) { //A messaggio attivo
            if( !val & !this.thanksOutput ) { //Controllo anche se è già presente messaggio di ringraziamento
                this.$data.thanksOutput = true; //Setto status messaggio ringraziamento a true
                this.typeMessage( this.thankYouMessage ); //Scrivo messaggio di ringraziamento
            }
        }
    },
    mounted() {
        this.typeMessage( this.$data.startMessage );
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
            font-size: $hero-span-size;
        }
    }
}

</style>