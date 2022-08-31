import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
    //Recupero runtime config per key
    const runtimeConfig = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: runtimeConfig.public.FIREBASE_API_KEY,
        databaseURL: runtimeConfig.public.FIREBASE_URL,
    };

    //Inizializzo firebase
    const app = initializeApp(firebaseConfig);
});