import axios, { AxiosResponse } from 'axios' 
import { Wine } from '../../typescript/wineTypes'
import { UserData } from 'typescript/authTypes'

const instance = axios.create({
    timeout: 10000
})

const responseBody = (response: AxiosResponse) => response.data

const requests ={ 
    get: (url: string) => instance.get(url).then(responseBody)
}

export const users = {
    getUsers: (): Promise<UserData[]> => requests.get('./users')
}

export const wines = {
    getWines: (): Promise<Wine[]> => requests.get('/wines')
}
