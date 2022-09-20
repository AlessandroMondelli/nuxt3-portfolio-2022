import { defineStore } from 'pinia';

export const useRouteFunc = defineStore({
    id: 'route',
    state: () => ({
        currentRoute: '',
    })
});