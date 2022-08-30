<template>
    <div class="section-header">
        <h1 class="page-title">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props:[ 'title' ],
}
</script>

<style scoped lang="scss">
.section-header {
    margin-bottom: $min-margin;
}
</style>