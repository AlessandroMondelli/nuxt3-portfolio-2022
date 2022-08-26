<template>
    <div class="section-content profilo-info">
        <p>
            Ciao! Sono Alessandro, classe '98 e sviluppatore Web che ama il settore IT e imparare ogni giorno qualcosa di nuovo.
        </p>
        <p>
            Ho studiato informatica per 5 anni all'istituto I.T.T Montani di Fermo e migliorato le mie capacità nel campo dello sviluppo web grazie al corso intensivo di 700 ore di Boolean Careers.
        </p>
        <p>
            Lavoro dal 2020 nel settore del web development, principalmente da remoto e sono sempre in cerca di nuove sfide che mi migliorino e che mi stimolino a dare il meglio.
        </p>
        <p>
            Nel tempo libero amo giocare ai videogiochi, leggere e studiare nuove tecnologie.
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media screen and (min-width: $mobile) {
    .section-content {
        p {
            margin-bottom: $profilo-text-margin;
        }
    }
}

@media screen and (min-width: $tablet) {
    .section-content {
        justify-content: center;
    }
}
</style>