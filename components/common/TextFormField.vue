<template>
    <div class="form-control">
        <label>{{ label }}</label>
        <textarea v-if="type == 'textarea'" :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" rows="4" cols="25" /> 
        <input v-else :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" />
        <Transition name="fade-up"> 
            <p v-if="error" class="error-warning">{{ errorMessage }}</p>
        </Transition>
    </div>  
</template>

<script>
export default {
    props: [ 'label', 'name', 'type', 'value' ],
    data() {
        return {
            error: false,
            errorMessage: '',
        }
    }, 
    methods: {
        returnValue() { //Funzione che controlla i campi e ritorna errori se presenti
            if( this.type == 'text' ) {
                if( this.value == '' || this.value.length < 3 ) {
                    if( this.error === false ) 
                        this.error = true;

                    this.errorMessage = 'Il valore non può essere vuoto o più corto di due caratteri';
                    return;
                } 
            } else if( this.type == 'email' ) {
                var check = String(this.value).toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );

                if( check === null ) {
                    if( this.error === false ) 
                        this.error = true;

                    this.errorMessage = 'Inserisci un indirizzo email valido';
                    return;
                }
            } else if( this.type == 'textarea' ) {
                if( this.value.length < 10 ) {
                    if( this.error === false ) 
                        this.error = true;

                    this.errorMessage = 'Aggiungi altri caratteri al messaggio';
                    return;
                }
            }

            if( this.error === true ) 
                    this.error = false;

            this.$emit( 'return-value', this.name, this.value );
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .form-control {
        margin: $min-margin 0;
        display: flex;
        flex-direction: column;
        position: relative;
    

        label {
            margin-bottom: $min-margin - 1.5rem;
        }

        input, textarea {
            padding: $min-margin - 1.5rem;
            border-radius: 5px;
            border: 0;
            transition: $common-transition;
        }

        input:focus, textarea:focus {
            border: 1px solid $second-color;
            box-shadow: inset 0px 0px 8px 2px $second-color;
            outline: none;
        }

        .error-warning {
            font-size: $small-font-size;
            margin-top: $min-margin - 1.5rem;
        }
    }
}
</style>