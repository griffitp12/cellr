import { AccessAuthStore } from "./authStore"
import { AccessWineStore } from "./wineStore"
import { wines, users } from "../apicalls"
import { Wine } from '../../../typescript/wineTypes'

const wineStore = AccessWineStore()
const authStore = AccessAuthStore()

export const setAllWines = async (): Promise<void> => {
    const getter = await wines.getWines()
    for (const element of getter) {
        wineStore.allWinesList.push(element)
    }
}

export const setCurrentWine = (clickedWine: Wine): void => {
    wineStore.currentWine = clickedWine
}

export const setAllUsers = async (): Promise<void> => {
    const getter = await users.getUsers()
    for (const element of getter) {
        authStore.userList.push(element)
    }
  }