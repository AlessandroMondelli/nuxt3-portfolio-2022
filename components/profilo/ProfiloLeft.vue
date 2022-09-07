<template>
    <div class="profilo-section profilo-left-section">
        <p>
            Ciao! Sono Alessandro, sviluppatore Web classe '98, appassionato del settore IT e dall'imparare ogni giorno qualcosa di nuovo.
        </p>
        <p>
            Ho studiato informatica per 5 anni all'istituto I.T.T Montani di Fermo e migliorato le mie capacità nel campo dello sviluppo web grazie al corso intensivo di Boolean Careers.
        </p>
        <p>
            Lavoro dal 2020 nel settore del web development, principalmente da remoto e sono sempre in cerca di nuove sfide che mi migliorino e che mi stimolino a dare il mio meglio.
        </p>
        <p>
            Nel tempo libero amo giocare ai videogiochi, leggere e studiare nuove tecnologie.
        </p>
        <div class="linkedin-link">
            <p>Scopri di più su <a href="https://www.linkedin.com/in/alessandro-mondelli-5b15971a1" target="__blank"><i class="fa-brands fa-linkedin"></i></a></p>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    @media screen and (min-width: $mobile) {
        p {
            margin-bottom: $profilo-text-margin;
        }  

        .fa-linkedin {
            font-size: 32px;
            margin-left: $min-margin - 1rem;
            transition: color 0.3s ease;

            &:hover {
                color: #0A66C2;
                cursor: pointer;
            }
        }
    }

    @media screen and (min-width: $tablet) {
        .profilo-section {
            width: 50%;

            &.profilo-left-section {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
    
    @media screen and (min-width: $xl) {
        .profilo-section {
            width: 40%;
        }
    }
    
</style>