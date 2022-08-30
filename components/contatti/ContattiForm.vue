<template>
    <div class="contatti-form-wrap">
        <form @submit.prevent="sendForm">
            <div class="fields-row">
                <CommonTextFormField class="form-field-comp" label="Nome" name="nome" type="text" @return-value="getValue" />
                <CommonTextFormField class="form-field-comp" label="Cognome" name="cognome" type="text" @return-value="getValue" />
            </div>
            <div class="fields-row">
                <CommonTextFormField class="form-field-comp" label="Email" name="email" type="email" @return-value="getValue" />
                <CommonTextFormField class="form-field-comp" label="Messaggio" name="messaggio" type="textarea" @return-value="getValue" />
            </div>
            <button class="submit-btn" type="submit">Invia messaggio</button>
        </form>
    </div> 
</template>

<script>
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
        getValue(...e) {
            const formValue = e[0];
            const dataArray = Object.keys(this.$data);

            for( var i = 0; i < dataArray.length; i++ ) {
                if( dataArray[i] === formValue ) {
                    this[formValue] = e[1];
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.contatti-form-wrap {
    display: flex;
    justify-content: flex-start;

    .fields-row {
        display: flex;
        justify-content: space-between;

        .form-field-comp:nth-child(n+2) {
            margin-left: $min-margin;
        }
    }
}
</style>