import { createRouter, createWebHashHistory } from 'vue-router';
import WineList from '../views/WineList.vue';
import AddWine from '../views/AddWine.vue';
const routes = [
    {
        path: '/',
        name: 'WineList',
        component: WineList
    },
    {
        path: '/addWine',
        name: 'AddWine',
        component: AddWine
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
