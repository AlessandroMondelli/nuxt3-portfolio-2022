<template>
    <div class="profilo-section profilo-left-section">
        <p>
            Alessandro è uno sviluppatore Web classe '98, appassionato del settore IT e determinato nel migliorarsi ogni giorno per raggiungere i proprio obiettivi.
        </p>
        <p>
            Si è diplomato in informatica all'istituto I.T.T Montani di Fermo, per poi decidere di approfondire le conoscenze da Web Developer con il corso intensivo di Boolean Careers.
        </p>
        <p>
            Inizia, come prima esperienza, una collaborazione nel 2020 come IT e Web Developer presso l'azienda Isegno S.r.l., attiva tutt'oggi.
        </p>
        <p>
            Nel tempo libero ama giocare ai videogiochi, leggere e studiare nuove tecnologie.
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
            font-size: $hero-span-size;
            margin-left: $min-margin - 1rem;
            transition: color $common-transition;

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