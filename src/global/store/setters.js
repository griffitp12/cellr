import { AccessAuthStore } from "./authStore";
import { AccessWineStore } from "./wineStore";
import { wines, users } from "../apicalls";
const wineStore = AccessWineStore();
const authStore = AccessAuthStore();
export const setAllWines = async () => {
    const getter = await wines.getWines();
    for (const element of getter) {
        wineStore.allWinesList.push(element);
    }
};
export const setCurrentWine = (clickedWine) => {
    wineStore.currentWine = clickedWine;
};
export const setAllUsers = async () => {
    const getter = await users.getUsers();
    for (const element of getter) {
        authStore.userList.push(element);
    }
};
