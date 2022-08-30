<template>
    <div class="form-control">
        <label>{{ label }}</label>
        <textarea v-if="type == 'textarea'" :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" rows="4" cols="25" /> 
        <input v-else :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" /> 
        <p v-if="error" class="error-warning">Il campo non può essere vuoto</p>
    </div>  
</template>

<script>
export default {
    props: [ 'label', 'name', 'type' ],
    data() {
        return {
            value: '',
            error: false
        }
    }, 
    methods: {
        returnValue() {
            if( this.value !== '' ) {
                this.$emit( 'return-value', this.name, this.value );

                if( this.error === true ) 
                    this.error = false;
            } else {
                this.error = true;
            } 
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
    }

    label {
        margin-bottom: 0.5rem;
    }

    input {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid black;
        transition: 0.3s ease;
    }

    input:focus {
        border: 1px solid #00FFAB;
        box-shadow: inset 0px 0px 8px 2px #00FFAB;
    }

    .error-warning {
        font-size: 12px;
        margin-top: $min-margin - 1.5rem;
    }
}
</style>