<template>
    <div class="progetto-media-wrap">
        <div v-if="activeProject.media != ''" class="tech-video">
            <video :src="'/videos/' + activeProject.media + '.mp4'" controls></video>
        </div>
    </div>       
</template>

<script>
export default {
    props: ['activeProject']
}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .tech-video {
        margin-bottom: $min-margin;
        background: #000;

        video {
            max-width: 100%;
        }
    }   
}

@media screen and (min-width: $laptop) {
    .progetto-media-wrap {
        text-align: center;

        .tech-video {
            margin-bottom: 0;
            background: none;        }
    }
}

</style>