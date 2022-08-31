<template>
    <div class="contatti-form-wrap">
        <form @submit.prevent="sendForm">
            <div class="fields-row">
                <CommonTextFormField label="Nome" name="nome" type="text" :value="nome" @return-value="getValue" />
                <CommonTextFormField label="Cognome" name="cognome" type="text" :value="cognome" @return-value="getValue" />
            </div>
            <div class="fields-row">
                <CommonTextFormField label="Email" name="email" type="email" :value="email" @return-value="getValue" />
                <CommonTextFormField label="Messaggio" name="messaggio" type="textarea" :value="messaggio" @return-value="getValue" />
            </div>
            <button class="submit-btn" type="submit">Invia messaggio</button>
        </form>
    </div> 
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";

export default {
    data() {
        return {
            nome: '',
            cognome: '',
            email: '',
            messaggio: '',
        }
    },
    methods: {
        getValue(...e) { //Prendo valori da $emit
            const formValue = e[0]; //recupero name
            const dataArray = Object.keys(this.$data); //trasforma data in array

            for( var i = 0; i < dataArray.length; i++ ) { //Itero key di data
                if( dataArray[i] === formValue ) { //Se trovo corrispondenza
                    this[formValue] = e[1]; //Salvo valore
                }
            }
        },
        sendForm() { //Invio form
            const realtimeDatabase = getDatabase(); //Prendo database firebase
            const timestamp = new Date(); //Salvo in variabile timestamp
            const data = Object.values(this.$data); //trasformo data in array
            let flag = false; //flag errore

            for( var i = 0; i < data.length; i++ ) { //data
                if( data[i] == '' ) {
                    flag = true;
                    this.$emit( 'form-error', true );
                }
            }

            if( !flag ) { //Se non sono stati trovati errori
                update(ref(realtimeDatabase, 'contatti/' + timestamp ), {
                nome: this.nome,
                cognome : this.cognome,
                email: this.email,
                message: this.messaggio,
                timestamp: timestamp,
                })
                .then(() => {
                    this.nome = '';
                    this.cognome = '';
                    this.email = '';
                    this.messaggio = '';
                });
            } 
        }
    }
}
</script>

<style scoped lang="scss">
.contatti-form-wrap {
    display: flex;
    justify-content: flex-start;
}
</style>