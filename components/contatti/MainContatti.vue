<template>
    <section id="contatti-section" class="contatti-wrap content-container">
        <div class="container">  
            <CommonHeader :title="'contatti'" />
            <ContattiContent />
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.contatti-wrap {
    background-color: $first-color;
    color: $font-color;
}
</style>