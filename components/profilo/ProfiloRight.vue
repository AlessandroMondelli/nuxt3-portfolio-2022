<template>
    <div class="profilo-section profilo-right-section">
        <ProfiloList :profiloData="profiloData.workExps" />
        <ProfiloList :profiloData="profiloData.formazione" />
    </div> 
</template>

<script>
import { useProfiloData } from '@/stores/profiloData';

export default {
    setup() {
        const profiloData = useProfiloData();

        return { profiloData };
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .profilo-right-section {
        margin: $min-margin + 2rem 0;
        padding-bottom: $min-margin;
    }
}


@media screen and (min-width: $tablet) {
    .profilo-section {
        width: 35%;

        &.profilo-right-section {
            margin: 0;
            padding-bottom: 0;
        }
    }
}

@media screen and (min-width: $xl) {
    .profilo-section {
        width: 30%;
    }
}
</style>