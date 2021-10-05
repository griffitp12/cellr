import { AccessAuthStore } from "./authStore"
import { AccessWineStore } from "./wineStore"
import { wines, users } from "../apicalls"

export const setAllWines = async () => {
    const getter = await wines.getWines()
    const wineStore = AccessWineStore()
    for (const element of getter) {
        wineStore.allWinesList.push(element)
    }
}

export const setAllUsers = async () => {
    const getter = await users.getUsers()
    const authStore = AccessAuthStore()
    for (const element of getter) {
        authStore.userList.push(element)
    }
  }