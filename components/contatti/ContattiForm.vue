<template>
    <div class="contatti-form-wrap">
        <div class="contatti-form">
            <form @submit.prevent="sendForm">
                <div class="fields-row">
                    <CommonTextFormField label="Nome" name="nome" type="text" :value="userData.nome" @return-value="getValue" />
                    <CommonTextFormField label="Cognome" name="cognome" type="text" :value="userData.cognome" @return-value="getValue" />
                </div>
                <div class="fields-row">
                    <CommonTextFormField label="Email" name="email" type="email" :value="userData.email" @return-value="getValue" />
                    <CommonTextFormField label="Messaggio" name="messaggio" type="textarea" :value="userData.messaggio" @return-value="getValue" />
                </div>
                <button class="submit-btn" type="submit">Invia messaggio</button>
            </form>
            <Transition name="fade-up">
                <p class="form-error text-small" v-if="formError">I campi non possono essere vuoti, riprova.</p>
            </Transition>
        </div>
    </div> 
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";

export default {
    data() {
        return {
            userData: {
                nome: '',
                cognome: '',
                email: '',
                messaggio: '',
            },
            formError: false
        }
    },
    methods: {
        getValue(...e) { //Prendo valori da $emit
            const formValue = e[0]; //recupero name
            const dataArray = Object.keys(this.$data.userData); //trasforma data in array

            for( var i = 0; i < dataArray.length; i++ ) { //Itero key di data
                if( dataArray[i] === formValue ) { //Se trovo corrispondenza
                    this.userData[formValue] = e[1]; //Salvo valore
                }
            }
        },
        sendForm() { //Invio form
            const realtimeDatabase = getDatabase(); //Prendo database firebase
            const timestamp = new Date(); //Salvo in variabile timestamp
            const data = Object.values(this.$data.userData); //trasformo data in array

            let flag = false; //flag errore
            let i = 0; //contatore

            do {
                if( data[i] == '' ) {
                    flag = true;
                    this.formError = flag;
                }

                i++;
            } while( i < data.length || flag == false );

            if( !flag ) { //Se non sono stati trovati errori
                update(ref(realtimeDatabase, 'contatti/' + timestamp ), {
                nome: this.userData.nome,
                cognome : this.userData.cognome,
                email: this.userData.email,
                message: this.userData.messaggio,
                timestamp: timestamp,
                })
                .then(() => {
                    this.userData.nome = '';
                    this.userData.cognome = '';
                    this.userData.email = '';
                    this.userData.messaggio = '';
                });
            } 
        }
    }
}
</script>

<style scoped lang="scss">
.contatti-form-wrap {
    display: flex;
    justify-content: flex-end;
    width: 55%;
    
    .form-error {
        margin-top: $min-margin - 1rem;
    }
}
</style>