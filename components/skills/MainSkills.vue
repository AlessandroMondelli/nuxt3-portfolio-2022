<template>
    <section id="skills-section" class="skills-wrap content-container">
        <div class="container">
            <CommonHeader :title="'skills'" />
            <SkillsContent />
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .skills-wrap {
        background-color: $first-color;
        color: $font-color;
    }
</style>