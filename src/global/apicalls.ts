import axios, { AxiosResponse } from 'axios'
import { Wine, WineEncounter } from '../../typescript/wineTypes'
import { UserData } from 'typescript/authTypes'

const instance = axios.create({
  timeout: 10000,
})

const responseBody = (response: AxiosResponse<any>) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, data: Wine) => instance.post(url, data).then(responseBody),
}

export const users = {
  getUsers: (): Promise<UserData[]> => requests.get('./users'),
}

export const wines = {
  getWines: (): Promise<Wine[]> => requests.get('./wines/allWines'),
  postWine: (wine: Wine): Promise<void> => requests.post('./wines/postWine', wine)
}

export const encounters = {
  encountersByWine: (wineName: string): Promise<WineEncounter[]> => requests.get(`./encounters/${wineName}`),
}
