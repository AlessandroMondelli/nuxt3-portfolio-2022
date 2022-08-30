<template>
    <div class="contatti-data-wrap">
        <div class="contatti-data-el" v-for="contact in contacts" :key="contact">
            <img :src="'/assets/images/contatti/' + contact + '.png'" :alt="'icona ' + contact">
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            contacts: [ 'email', 'linkedin' ]
        }
    }
}
</script>

<style>

</style>