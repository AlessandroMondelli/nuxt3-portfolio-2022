import { defineStore } from 'pinia';

export const useHamburgerStatus = defineStore({
    id: 'hamburgerStatus',
    state: () => ({
        hambStat: false,
    }),
    actions: {
        changeState() {
            this.hambStat = !this.hambStat;
        }
    }
});