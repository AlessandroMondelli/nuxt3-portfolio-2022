import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
    //Recupero runtime config per key
    const runtimeConfig = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: runtimeConfig.public.FIREBASE_API_KEY,
        databaseURL: runtimeConfig.public.FIREBASE_URL,
        authDomain: "nuxt-portfolio-ba2e3.firebaseapp.com",
        projectId: "nuxt-portfolio-ba2e3",
        storageBucket: "nuxt-portfolio-ba2e3.appspot.com",
        messagingSenderId: "991352733002",
        appId: "1:991352733002:web:75a54b42142c52455b15b3",
        measurementId: "G-GZHFM0W7RW"
    };

    //Inizializzo firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
});