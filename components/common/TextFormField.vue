<template>
    <div class="form-control">
        <label>{{ label }}</label>
        <textarea v-if="type == 'textarea'" :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" rows="4" cols="25" /> 
        <input v-else :id="label" :name="name" :type="type" v-model="value" @blur="returnValue()" />
        <Transition name="fade-up"> 
            <p v-if="error" class="error-warning">Il campo non può essere vuoto</p>
        </Transition>
    </div>  
</template>

<script>
export default {
    props: [ 'label', 'name', 'type', 'value' ],
    data() {
        return {
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
        position: relative;
    

        label {
            margin-bottom: 0.5rem;
        }

        input, textarea {
            padding: 0.5rem;
            border-radius: 5px;
            border: 0;
            transition: 0.3s ease;
        }

        input:focus, textarea:focus {
            border: 1px solid $second-color;
            box-shadow: inset 0px 0px 8px 2px $second-color;
            outline: none;
        }

        .error-warning {
            font-size: 12px;
            margin-top: $min-margin - 1.5rem;
        }
    }
}
</style>